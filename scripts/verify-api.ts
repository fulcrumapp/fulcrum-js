#!/usr/bin/env node
/**
 * API Verification Script
 *
 * This script verifies the Fulcrum API client by calling all list operations
 * and printing statistics about the responses.
 *
 * Usage: yarn verify
 */

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
  return new Promise((resolve) => {
    process.stdout.write(`${colors.cyan}Enter your Fulcrum API token: ${colors.reset}`);

    let token = '';
    const stdin = process.stdin;

    stdin.setRawMode(true);
    stdin.resume();
    stdin.setEncoding('utf8');

    const onData = (char: string) => {
      const code = char.codePointAt(0);

      if (!code) return;

      // Handle Ctrl+C
      if (code === 3) {
        process.stdout.write('\n');
        process.exit(0);
      }

      // Handle Enter/Return
      if (code === 13 || code === 10) {
        process.stdout.write('\n');
        stdin.setRawMode(false);
        stdin.pause();
        stdin.removeListener('data', onData);
        resolve(token.trim());
        return;
      }

      // Handle Backspace/Delete
      if (code === 127 || code === 8) {
        if (token.length > 0) {
          token = token.slice(0, -1);
          process.stdout.write('\b \b');
        }
        return;
      }

      // Handle normal characters
      if (code >= 32) {
        token += char;
        process.stdout.write('*');
      }
    };

    stdin.on('data', onData);
  });
}

async function verifyEndpoint(
  name: string,
  fn: () => Promise<unknown>
): Promise<ApiStats> {
  const start = Date.now();
  try {
    const response = await fn();
    const durationMs = Date.now() - start;
    const data = (response as { data: unknown }).data;

    // Extract array from response (different endpoints use different property names)
    let items: unknown[] = [];
    let itemKey = '';

    if (Array.isArray(data)) {
      items = data;
    } else {
      // Try common property names for arrays
      const arrayKeys = Object.keys(data as Record<string, unknown>).filter(
        (key) => Array.isArray((data as Record<string, unknown>)[key])
      );
      if (arrayKeys.length > 0) {
        itemKey = arrayKeys[0];
        items = (data as Record<string, unknown>)[itemKey] as unknown[];
      }
    }

    const count = items.length;
    const sampleItem = count > 0
      ? JSON.stringify(items[0]).substring(0, 100) + '...'
      : 'No items';

    // Calculate response body size
    const responseBody = JSON.stringify(data);
    const contentLength = (response as { headers?: { 'content-length'?: string } }).headers?.['content-length']
      ? Number.parseInt((response as { headers: { 'content-length': string } }).headers['content-length'], 10)
      : Buffer.byteLength(responseBody, 'utf8');

    return {
      endpoint: name,
      count,
      status: (response as { status: number }).status,
      success: true,
      contentLength,
      sampleItem,
      durationMs,
    };
  } catch (error: unknown) {
    const durationMs = Date.now() - start;
    // Extract request details from axios error
    const axiosError = error as { config?: { url?: string; method?: string; baseURL?: string }; response?: { status?: number }; message?: string };
    const requestUrl = axiosError.config?.url || 'unknown';
    const requestMethod = axiosError.config?.method?.toUpperCase() || 'GET';
    const baseURL = axiosError.config?.baseURL || '';
    const fullUrl = baseURL ? `${baseURL}${requestUrl}` : requestUrl;

    return {
      endpoint: name,
      count: 0,
      status: axiosError.response?.status || 0,
      success: false,
      error: `${axiosError.message || 'Unknown error'} (${requestMethod} ${fullUrl})`,
      durationMs,
    };
  }
}

function printHeader() {
  console.log(`${colors.bright}${colors.blue}`);
  console.log('=================================================');
  console.log('  Fulcrum API Client Verification Script');
  console.log('=================================================');
  console.log(colors.reset);
}

function createTestSuite(client: FulcrumClient) {
  return [
    // Core resources
    { name: 'Forms', fn: () => client.forms.getAll() },
    { name: 'Records', fn: () => client.records.getAll({ perPage: 250 }) },
    { name: 'Records All History', fn: () => client.records.getAllHistory() },
    { name: 'Projects', fn: () => client.projects.getAll() },
    { name: 'Webhooks', fn: () => client.webhooks.getAll() },

    // CRUD resources
    { name: 'Authorizations', fn: () => client.authorizations.getAll() },
    { name: 'Changesets', fn: () => client.changesets.getAll({ perPage: 250 }) },
    { name: 'Choice Lists', fn: () => client.choiceLists.getAll() },
    { name: 'Classification Sets', fn: () => client.classificationSets.getAll() },
    { name: 'Groups', fn: () => client.groups.getAll() },
    { name: 'Layers', fn: () => client.layers.getAll() },
    { name: 'Memberships', fn: () => client.memberships.getAll() },
    { name: 'Roles', fn: () => client.roles.getAll() },

    // Specialized resources
    { name: 'Workflows', fn: () => client.workflows.getAll() },
    { name: 'Report Templates', fn: () => client.reportTemplates.getAll() },
    { name: 'Batches', fn: () => client.batches.getAll() },
    { name: 'Attachments', fn: () => client.attachments.getAll() },

    // Audit logs
    { name: 'Audit Logs', fn: () => client.auditLogs.getAll({ perPage: 250 }) },

    // Media resources (these return metadata, not full files)
    { name: 'Photos', fn: () => client.photos.getAllMetadata({ perPage: 250 }) },
    { name: 'Signatures', fn: () => client.signatures.getAll({ perPage: 250 }) },
    { name: 'Videos', fn: () => client.videos.getAll({ perPage: 250 }) },
    { name: 'Audio', fn: () => client.audio.getAll({ perPage: 250 }) },
  ];
}

async function runTests(tests: Array<{ name: string; fn: () => Promise<unknown> }>): Promise<ApiStats[]> {
  const stats: ApiStats[] = [];

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

  return stats;
}

function printSummary(stats: ApiStats[], totalTests: number) {
  console.log(`\n${colors.bright}${colors.blue}Summary:${colors.reset}\n`);

  const successful = stats.filter((s) => s.success).length;
  const failed = stats.filter((s) => !s.success).length;
  const totalItems = stats.reduce((sum, s) => sum + s.count, 0);
  const totalBytes = stats.reduce((sum, s) => sum + (s.contentLength || 0), 0);
  const totalKB = (totalBytes / 1024).toFixed(2);

  console.log(`  ${colors.green}✓ Successful:${colors.reset} ${successful}/${totalTests}`);
  console.log(`  ${colors.red}✗ Failed:${colors.reset}     ${failed}/${totalTests}`);
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

  return failed;
}

function printFooter(exitCode: number) {
  console.log(`\n${colors.bright}${exitCode === 0 ? colors.green : colors.red}`);
  console.log('=================================================');
  console.log(exitCode === 0 ? '  ✓ Verification Complete' : '  ✗ Verification Failed');
  console.log('=================================================');
  console.log(colors.reset);
}

async function main() {
  printHeader();

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

  const tests = createTestSuite(client);
  const stats = await runTests(tests);
  const failed = printSummary(stats, tests.length);

  const exitCode = failed > 0 ? 1 : 0;
  printFooter(exitCode);

  process.exit(exitCode);
}

await main().catch((error) => {
  console.error(`${colors.red}Fatal error:${colors.reset}`, error);
  process.exit(1);
});
