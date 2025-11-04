#!/usr/bin/env node
/**
 * API Verification Script
 *
 * This script verifies the Fulcrum API client by calling all list operations
 * and printing statistics about the responses.
 *
 * Usage: npm run verify
 */

import { createInterface } from 'node:readline';
import { FulcrumClient, FulcrumRegion } from '../src/client.js';

// ANSI color codes for output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m',
  cyan: '\x1b[36m',
};

interface ApiStats {
  endpoint: string;
  count: number;
  status: number;
  success: boolean;
  contentLength?: number;
  error?: string;
  sampleItem?: string;
  durationMs?: number;
}

async function promptForToken(): Promise<string> {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(
      `${colors.cyan}Enter your Fulcrum API token: ${colors.reset}`,
      (token) => {
        rl.close();
        resolve(token.trim());
      }
    );
  });
}

async function verifyEndpoint(
  name: string,
  fn: () => Promise<any>
): Promise<ApiStats> {
  const start = Date.now();
  try {
    const response = await fn();
    const durationMs = Date.now() - start;
    const data = response.data;

    // Extract array from response (different endpoints use different property names)
    let items: any[] = [];
    let itemKey = '';

    if (Array.isArray(data)) {
      items = data;
    } else {
      // Try common property names for arrays
      const arrayKeys = Object.keys(data).filter(
        (key) => Array.isArray(data[key])
      );
      if (arrayKeys.length > 0) {
        itemKey = arrayKeys[0];
        items = data[itemKey];
      }
    }

    const count = items.length;
    const sampleItem = count > 0
      ? JSON.stringify(items[0]).substring(0, 100) + '...'
      : 'No items';

    // Calculate response body size
    const responseBody = JSON.stringify(data);
    const contentLength = response.headers?.['content-length']
      ? Number.parseInt(response.headers['content-length'], 10)
      : Buffer.byteLength(responseBody, 'utf8');

    return {
      endpoint: name,
      count,
      status: response.status,
      success: true,
      contentLength,
      sampleItem,
      durationMs,
    };
  } catch (error: any) {
    const durationMs = Date.now() - start;
    // Extract request details from axios error
    const requestUrl = error.config?.url || 'unknown';
    const requestMethod = error.config?.method?.toUpperCase() || 'GET';
    const baseURL = error.config?.baseURL || '';
    const fullUrl = baseURL ? `${baseURL}${requestUrl}` : requestUrl;

    return {
      endpoint: name,
      count: 0,
      status: error.response?.status || 0,
      success: false,
      error: `${error.message} (${requestMethod} ${fullUrl})`,
      durationMs,
    };
  }
}

async function main() {
  console.log(`${colors.bright}${colors.blue}`);
  console.log('=================================================');
  console.log('  Fulcrum API Client Verification Script');
  console.log('=================================================');
  console.log(colors.reset);

  // Prompt for API token
  const apiKey = await promptForToken();

  if (!apiKey) {
    console.error(`${colors.red}Error: API token is required${colors.reset}`);
    process.exit(1);
  }

  console.log(`\n${colors.yellow}Initializing client...${colors.reset}\n`);
  const client = new FulcrumClient({
    apiKey,
    region: FulcrumRegion.US
  });

  const stats: ApiStats[] = [];

  // Test all list operations available in the wrapper
  const tests = [
    { name: 'Forms', fn: () => client.forms.getAll() },
    { name: 'Records', fn: () => client.records.getAll() },
    { name: 'Projects', fn: () => client.projects.getAll() },
    { name: 'Webhooks', fn: () => client.webhooks.getAll() },
    { name: 'Audit Logs', fn: () => client.auditLogs.getAll() },
    { name: 'Authorizations', fn: () => client.authorizations.getAll() },
    { name: 'Changesets', fn: () => client.changesets.getAll() },
    { name: 'Choice Lists', fn: () => client.choiceLists.getAll() },
    { name: 'Classification Sets', fn: () => client.classificationSets.getAll() },
    { name: 'Groups', fn: () => client.groups.getAll() },
    { name: 'Layers', fn: () => client.layers.getAll() },
    { name: 'Memberships', fn: () => client.memberships.getAll() },
    { name: 'Roles', fn: () => client.roles.getAll() },
  ];

  console.log(`${colors.bright}Testing ${tests.length} endpoints...${colors.reset}\n`);

  for (const test of tests) {
    process.stdout.write(`${colors.cyan}Testing ${test.name.padEnd(25)}${colors.reset}`);
    const result = await verifyEndpoint(test.name, test.fn);
    stats.push(result);

    if (result.success) {
      const sizeKB = result.contentLength ? (result.contentLength / 1024).toFixed(2) : '0';
      const duration = result.durationMs ? `${result.durationMs} ms` : '';
      console.log(`${colors.green}✓ ${result.count} items (HTTP ${result.status}, ${sizeKB} KB, ${duration})${colors.reset}`);
    } else {
      const duration = result.durationMs ? `, ${result.durationMs} ms` : '';
      console.log(`${colors.red}✗ Failed (${result.error}${duration})${colors.reset}`);
    }
  }

  // Print summary
  console.log(`\n${colors.bright}${colors.blue}Summary:${colors.reset}\n`);

  const successful = stats.filter((s) => s.success).length;
  const failed = stats.filter((s) => !s.success).length;
  const totalItems = stats.reduce((sum, s) => sum + s.count, 0);
  const totalBytes = stats.reduce((sum, s) => sum + (s.contentLength || 0), 0);
  const totalKB = (totalBytes / 1024).toFixed(2);

  console.log(`  ${colors.green}✓ Successful:${colors.reset} ${successful}/${tests.length}`);
  console.log(`  ${colors.red}✗ Failed:${colors.reset}     ${failed}/${tests.length}`);
  console.log(`  ${colors.cyan}Total Items:${colors.reset}  ${totalItems}`);
  console.log(`  ${colors.cyan}Total Size:${colors.reset}   ${totalKB} KB`);

  // Print endpoints with items
  const withItems = stats.filter((s) => s.count > 0);
  if (withItems.length > 0) {
    console.log(`\n${colors.bright}Endpoints with data:${colors.reset}\n`);
    for (const stat of withItems) {
      console.log(`  ${colors.yellow}${stat.endpoint}:${colors.reset} ${stat.count} items`);
    }
  }

  // Exit with appropriate code
  const exitCode = failed > 0 ? 1 : 0;

  console.log(`\n${colors.bright}${exitCode === 0 ? colors.green : colors.red}`);
  console.log('=================================================');
  console.log(exitCode === 0 ? '  ✓ Verification Complete' : '  ✗ Verification Failed');
  console.log('=================================================');
  console.log(colors.reset);

  process.exit(exitCode);
}

await main().catch((error) => {
  console.error(`${colors.red}Fatal error:${colors.reset}`, error);
  process.exit(1);
});
