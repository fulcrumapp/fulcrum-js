# AI Agent Guidelines for fulcrum-js

This document provides instructions for AI coding agents working on this project.

## ⚠️ CRITICAL: Version Control Policy

Agents MUST NEVER COMMIT CODE AUTOMATICALLY

- ❌ DO NOT use `git commit` commands
- ❌ DO NOT commit changes without explicit user permission
- ✅ Instead: Prepare changes and ask the user to review before committing
- ✅ Ask the user: "Should I commit these changes with message: ..."

This ensures the user maintains full control over what gets committed and maintains an accurate git history.

## Critical Requirements

### 1. ✅ Verify Problems Tab

**BEFORE** completing any task or code changes:

```bash
# Check for errors using the get_errors tool
# The Problems tab MUST be clean (0 errors)
```

- **Zero tolerance** for TypeScript errors
- **Zero tolerance** for ESLint errors
- Markdown linting errors should be fixed but are lower priority
- Always run `get_errors()` tool before marking work complete

### 2. 🧪 Test Requirements

**ALL code changes MUST**:

1. **Pass all existing tests** – run `yarn test` and ensure 0 failures.

2. **Maintain 90%+ code coverage** (80%+ for branches) – run `yarn test:coverage`. Targets: statements ≥90%, branches ≥80% (allowing for optional-parameter gaps), functions ≥90%, lines ≥90%.

3. **Write tests for new code** – cover every new function/method, add integration tests for each new feature, keep tests in `src/**/*.test.ts`, and use Jest with TypeScript.

### 3. 📁 Project Structure

#### Hand-Written Code (COMMITTED to git)

```text
src/
├── client.ts         # Wrapper client - YOUR CODE
├── client.test.ts    # Tests - YOUR CODE
└── index.ts          # Barrel exports
```

#### Generated Code (NOT COMMITTED)

```text
generated/            # OpenAPI-generated TypeScript client
dist/                 # Build outputs
coverage/             # Test coverage reports
```

### 4. 🔨 Build Process

Before any code changes:

```bash
# Ensure generated client exists
yarn generate:full

# Build everything
yarn build
```

After code changes to `src/`:

```bash
# Build wrapper
yarn build:wrapper

# Run tests
yarn test

# Verify coverage
yarn test:coverage

# Check for problems
# Use get_errors() tool
```

### 5. 🚫 What NOT to Touch

**NEVER edit these directly**:

- `generated/**` - Auto-generated from OpenAPI spec (regenerated on every build)
  - ⚠️ **CRITICAL**: Any manual edits to `generated/` will be lost when regenerating
  - **EXCEPTION**: You ARE allowed to update dependencies in `generated/package.json` to current versions after generation
  - If the generated code needs changes, modify the OpenAPI spec or generation config
  - All generated API quirks MUST be abstracted in the wrapper client (`src/client.ts`)
- `dist/**` - Build output
- `node_modules/**` - Dependencies

**Only edit**:

- `src/**/*.ts` - Hand-written wrapper code
- `src/**/*.test.ts` - Test files
- Configuration files when necessary

**Generation Configuration** (edit with care):

- `openapitools.json` - OpenAPI Generator configuration
  - Can modify generation options (naming, templates, etc.)
  - **But**: Changes must be abstracted in wrapper client
  - **Rule**: Users should never see generated API quirks (like `'application/json'` params)
  - The wrapper client (`src/client.ts`) hides all generation artifacts from users

### 6. 📝 Code Quality Standards

#### TypeScript

- **Strict mode enabled** - No implicit any
- **ESM modules** - Use `.js` extensions in imports
- **Explicit types** - Type all function parameters and returns
- **No errors** - Must compile cleanly

#### Testing

- **Descriptive test names** - Use "should..." pattern
- **Arrange-Act-Assert** - Clear test structure
- **Mock external dependencies** - Don't call real APIs in tests
- **Test edge cases** - Not just happy paths

#### Coverage Rules

If coverage drops below 90%:

1. Write tests for uncovered code
2. Or remove/refactor unused code
3. Do NOT ship with <90% coverage

### 7. 🔄 Workflow Checklist

For EVERY code change:

- [ ] Code compiles (`yarn build:wrapper`)
- [ ] All tests pass (`yarn test`)
- [ ] Coverage ≥90% (`yarn test:coverage`)
- [ ] Problems tab clean (`get_errors()`)
- [ ] No TypeScript errors
- [ ] No ESLint errors
- [ ] Code follows project conventions
- [ ] Tests added for new functionality
- [ ] Documentation updated if needed

### 8. 🎯 Common Tasks

#### Understanding the Architecture

This project has a **two-layer architecture**:

1. **Generated Layer** (`generated/`):
   - Auto-generated from OpenAPI spec using `openapi-generator`
   - Contains raw API bindings with all HTTP details exposed
   - Generated code may have quirks (e.g., `accept` and `contentType` params on every method)
   - **NEVER edit directly** - will be overwritten on regeneration

2. **Wrapper Layer** (`src/client.ts`):
   - Hand-written, clean API that hides implementation details
   - Abstracts away HTTP headers, content-types, request wrapping
   - Provides user-friendly interfaces
   - **This is where you work**

**Example of abstraction**:

```typescript
// Generated API (ugly, exposed in generated/):
await api.recordsCreate(
  'application/json',    // accept header - implementation detail
  'application/json',    // content-type - implementation detail
  false,                 // xSkipWorkflows
  false,                 // xSkipWebhooks
  { recordsCreateRequest: { record: {...} } }  // wrapped request
);

// Wrapper API (clean, in src/client.ts):
await client.records.create({
  record: {...}          // Clean! Just the data users care about
  // Headers set automatically, request unwrapped
});
```

**When generated code has quirks**:

- ✅ **DO**: Hide them in the wrapper layer
- ✅ **DO**: Set sensible defaults (like `'application/json'`)
- ✅ **DO**: Simplify type signatures
- ❌ **DON'T**: Try to fix the generated code
- ❌ **DON'T**: Expose implementation details to users

#### Adding a new wrapper method

```typescript
// 1. Add to src/client.ts
get myResource() {
  const api = this.api;
  return {
    getAll: (params: DefaultApiMyResourceGetAllRequest = {}) =>
      api.myResourceGetAll(params),
    // ... more methods
  } as const;
}

// 2. Add tests to src/client.test.ts
describe('myResource', () => {
  it('should expose myResource API', () => {
    const client = new FulcrumClient({ apiKey: 'test-key' });
    expect(client.myResource).toBeDefined();
    expect(typeof client.myResource.getAll).toBe('function');
  });
});

// 3. Build and test
yarn build:wrapper
yarn test:coverage

// 4. Verify coverage ≥90%
```

#### Fixing test coverage

```bash
# 1. See what's not covered
yarn test:coverage

# 2. Check coverage report
open coverage/lcov-report/index.html

# 3. Add tests for uncovered lines

# 4. Verify improvement
yarn test:coverage
```

#### Updating generated client

```bash
# Download the latest OpenAPI spec and regenerate the client.
yarn run download:spec
yarn run generate

# Generation rewrites the generated package manifests. Keep dependency updates
# in their separate PR and build against the committed manifests and lockfile.
git restore -- generated/package.json generated/yarn.lock
yarn run build

# 5. Check for breaking changes in generated API
# Compare method signatures in generated/dist/api/default-api.d.ts

# 6. Update wrapper to hide any new quirks or breaking changes
# Edit src/client.ts to:
#   - Hide new HTTP headers if exposed
#   - Simplify new parameter structures
#   - Set sensible defaults
#   - Keep the user-facing API clean and stable

# 6. Update tests to match new wrapper signatures
# Edit src/client.test.ts

# 7. Full verification
yarn build
yarn test:coverage

# 8. Document breaking changes if user-facing API changed
# Update README.md if needed
```

**Important**: The goal is to keep `src/client.ts` stable even when the generated API changes. Users should rarely need to change their code when we regenerate.

### 9. 🔍 Debugging Failed Tests

```bash
# Run in watch mode
yarn test:watch

# Run specific test file
yarn jest src/client.test.ts

# Run with verbose output
yarn jest --verbose

# Update snapshots if needed
yarn jest -u
```

### 10. 📊 Quality Gates

**Pull requests MUST**:

- ✅ Pass all tests (100% pass rate)
- ✅ Maintain ≥90% code coverage (≥80% branch coverage)
- ✅ Have 0 TypeScript errors
- ✅ Have 0 ESLint errors
- ✅ Pass Sonar quality gate (if configured)

**Before merging, verify**:

```bash
yarn build          # Must succeed
yarn test           # Must be 100% pass
yarn test:coverage  # Must be ≥90%
yarn lint           # Must have 0 errors
```

### 11. 🛠️ Tools & Commands Reference

| Command | Purpose | When to Use |
|---------|---------|-------------|
| `yarn test` | Run tests | After every code change |
| `yarn test:watch` | Run tests in watch mode | During development |
| `yarn test:coverage` | Run tests with coverage | Before committing |
| `yarn build` | Build everything | Before publishing |
| `yarn build:wrapper` | Build only wrapper | After editing src/ |
| `yarn lint` | Run ESLint | Before committing |
| `yarn generate` | Generate client from spec | After spec update |
| `yarn generate:full` | Download spec + generate + build | Full regeneration |
| `yarn clean` | Remove build artifacts | When starting fresh |

### 12. 🎓 Best Practices

1. **Test-Driven Development**: Write tests first, then implementation
2. **Small commits**: Each commit should have one clear purpose
3. **Meaningful names**: Functions, variables, tests should be self-documenting
4. **DRY principle**: Don't repeat yourself - extract common logic
5. **YAGNI principle**: You aren't gonna need it - don't over-engineer
6. **Keep it simple**: Prefer clarity over cleverness

### 13. ⚠️ Common Pitfalls

- ❌ Editing generated code directly (will be overwritten)
- ❌ Committing `generated/` or `dist/` directories
- ❌ Skipping tests "because it's a small change"
- ❌ Ignoring coverage drops
- ❌ Not verifying Problems tab is clean
- ❌ Using `any` type to bypass TypeScript errors
- ❌ Mocking too much in tests (mock APIs, not internals)

### 14. 🚀 Pre-Commit Checklist

```bash
# 1. Build
yarn build:wrapper

# 2. Test
yarn test:coverage

# 3. Verify coverage ≥90%
# Check output of previous command

# 4. Lint
yarn lint

# 5. Check problems
# Use get_errors() tool - must be 0 errors

# 6. Verify git status
git status
# Should NOT include: generated/, dist/, coverage/

# ✅ Ready to commit!
```

---

## Summary

The most important rules:

1. **Problems tab MUST be clean** - Use `get_errors()` tool
2. **All tests MUST pass** - Run `yarn test`
3. **Coverage MUST be ≥90%** - Run `yarn test:coverage`
4. **Never edit generated code** - Only edit `src/`
5. **Test everything** - New code needs new tests

If in doubt, ask! Better to clarify than to break the build.
