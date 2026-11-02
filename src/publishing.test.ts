import { spawnSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

describe('package publishing', () => {
  test('does not expose manual publishing scripts', () => {
    const manifest = JSON.parse(readFileSync('package.json', 'utf8'));

    expect(manifest.scripts['publish:npm']).toBeUndefined();
    expect(manifest.scripts['publish:github']).toBeUndefined();
    expect(manifest.scripts['publish:all']).toBeUndefined();
  });

  test('rejects the normal local publish lifecycle', () => {
    const result = spawnSync('npm', ['run', 'prepublishOnly'], { encoding: 'utf8' });

    expect(result.error).toBeUndefined();
    expect(result.status).not.toBe(0);
    expect(result.stderr).toContain('Publish using the GitHub Actions release workflows.');
  });
});
