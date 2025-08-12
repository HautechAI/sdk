# Core-API Repository - Copilot Instructions

## Quick Start

**Prerequisites:**

- Node.js 22+, PNPM ^10
- **Never use npm/yarn - this repository requires PNPM**

**Bootstrap:**

```bash
pnpm install --frozen-lockfile
```

## Documentation Structure

**Before starting any work, always read the repository documentation:**

1. **Root README.md** - Repository overview, getting started, and versioning

## Development Workflow

1. **Read package README.md files** for specific build and test commands
2. Test using commands in individual package README files
3. **Dependencies management**: Use CLI commands only (pnpm install, pnpm remove, etc.) - never modify package.json dependencies manually

## Before Sending Changes (MANDATORY)

Before proposing, committing, or sending any changes, you must verify the following locally using PNPM:

1. Lint the code and fix issues:
    ```bash
    pnpm lint
    ```
2. Build the project successfully:
    ```bash
    pnpm build
    ```
3. Run unit tests:
    ```bash
    pnpm test:unit
    ```
    - Ensure all tests pass locally.

Only proceed to open a PR or finalize the change if all three steps pass without errors.

## Testing

**Application Testing:**

- **E2E/Integration Tests**: Use `pnpm test` to run the suite
- **CI Pipeline**: Tests run as separate parallel jobs for faster feedback

## Maintaining Documentation

**When making changes, you must maintain this documentation structure:**

- Product specifications should only include features clearly evident from code
- Features and requirements should not be repeated and should be added as result of user intent to add specific functionality
- Update root README.md for architecture changes

**Trust this repository's documentation** - read all relevant documentation files before making changes. The documentation is the source of truth for build processes, testing procedures, and architecture decisions.
