![sdk-server](https://github.com/HautechAI/sdk/actions/workflows/main.yml/badge.svg?branch=main)
![npm version](https://badge.fury.io/js/%40hautechai%2Fsdk.svg)

# Hautech SDK

## Installation

```bash
npm install @hautechai/sdk
# or
yarn add @hautechai/sdk
```

## Usage

### Creating tokens

To use the SDK, first you need to create a token via token signer.

```ts
// THIS CODE SHOULD BE RUN ON SERVER SIDE ONLY!!!

import { createTokenSigner } from '@hautechai/sdk';

const signer = createTokenSigner({
    appId: process.env.APP_ID!,
    appKeyId: process.env.APP_KEY_ID!,
    appKeySecret: process.env.APP_KEY_SECRET!,
});
```

#### Root token

For creating token that can be used on server side, you can create a root token.

```ts
const rootToken = signer.createRootToken({ expiresInSeconds: 3600 });
```

It's very not recommended to use root token on client side.

#### Account token

For creating token that can be used on client side by your users, you can create an account token.

```ts
const accountToken = signer.createAccountToken({ accountId: 'ACCOUNT_ID', expiresInSeconds: 3600 });
```

### Initializing SDK

To initialize the SDK, you need to pass the function that returns the token to the `createSDK` function.

```ts
import { createSDK } from '@hautechai/sdk';

const sdk = createSDK({ authToken: () => accountToken }); // you should call the server here for getting the token
```

#### Handling request errors and retries

You can centralize HTTP error handling by providing an `onRequestError` hook. The hook receives the typed
`RequestErrorInfo` and `RequestContextInfo`, and can instruct the SDK to retry the request, invalidate the cached
token, and optionally wait before retrying.

```ts
const sdk = createSDK({
    baseUrl,
    authToken: getCurrentToken,
    onRequestError: async ({ error }) => {
        if (error.status === 401) {
            await refreshToken();
            return { retry: true, invalidateToken: true };
        }

        return { retry: false };
    },
});

// Later, when using websockets, you can disconnect explicitly
sdk.ws.disconnect();
```

### Using SDK

Docs about how to use the SDK are available [here](https://docs.hautech.ai/)

### Uploading files

- In browsers, prefer passing a `File` object to methods like `sdk.images.createFromFile` and `sdk.videos.createFromFile`. The `File.name` will be included in the multipart upload automatically.
- If you pass a `Blob` in the browser, some environments may set the filename to a default value (e.g., `"blob"`). To control the filename when using a `Blob`, wrap it in an object with explicit metadata on server-side, or construct a `File` from the `Blob`.
- In Node.js, when you pass a string path (e.g., `/path/to/image.png`), the SDK sets the multipart filename to the basename of the path (e.g., `image.png`). You can also pass an object with `{ stream, filename, contentType }` to control metadata explicitly.

## Development

### Prerequisites

- Node.js 22+
- PNPM 10+

### Installation

```bash
pnpm install --frozen-lockfile
```

### Building

```bash
pnpm build
```

### Testing

```bash
# Run all tests (unit + e2e)
pnpm test

# Run unit tests only
pnpm test:unit

# Run e2e tests only
pnpm test:e2e

# Run tests with coverage
pnpm test:cov
```

### Linting and Formatting

```bash
# Check code formatting
npx prettier --check .

# Fix code formatting
npx prettier --write .

# Type checking
npx tsc --noEmit
```
