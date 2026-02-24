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

#### Seedream v5 Lite imagine operations

```ts
// Text-to-image
const t2iOperation = await sdk.operations.run.imagine.seedream['5_lite_t2i'].v1({
    input: {
        prompt: 'A cinematic skyline at sunrise above a crystal bay',
        width: 2048,
        height: 2048,
    },
});

// Image edit
const editOperation = await sdk.operations.run.imagine.seedream['5_lite_edit'].v1({
    input: {
        prompt: 'Reimagine this scene as a watercolor illustration',
        imageIds: ['existing-image-id'],
    },
});

// Wait for the generated assets
const finalizedT2i = await sdk.operations.wait(t2iOperation);
const finalizedEdit = await sdk.operations.wait(editOperation);
```

Both variants accept dimensions up to 3072×3072. Pricing endpoints report a cost of **$0.04375 USD per run** for the text-to-image and edit models—use `sdk.pricing.list()` or `sdk.pricing.get('seedream.5_lite_t2i.v1')` / `sdk.pricing.get('seedream.5_lite_edit.v1')` to confirm the current catalog pricing.

#### Google Nano Banana prompt-only vs. edit mode

```ts
// Prompt-only generation (no source images required)
const promptOnly = await sdk.operations.run.google.nano_banana_pro.edit.v1({
    input: {
        prompt: 'Generate a high-fashion catalog shot of a model in neon streetwear',
        // imageIds omitted on purpose
    },
});

// Classic edit mode with at least one source image
const editFromImage = await sdk.operations.run.google.nano_banana_pro.edit.v1({
    input: {
        prompt: 'Apply a cinematic golden-hour lighting pass to this asset',
        imageIds: ['existing-image-id'],
    },
});
```

The backend Swagger DTO (`GoogleNanoBananaProEditV1Input`) intentionally marks `imageIds` as optional so prompt-only runs remain valid. Provide one or more IDs when you need edit behavior; omit the field when you want the model to generate a fresh asset purely from text.

### Uploading files

- In browsers, prefer passing a `File` object to methods like `sdk.images.createFromFile` and `sdk.videos.createFromFile`. The `File.name` will be included in the multipart upload automatically.
- If you pass a `Blob` in the browser, some environments may set the filename to a default value (e.g., `"blob"`). To control the filename when using a `Blob`, wrap it in an object with explicit metadata on server-side, or construct a `File` from the `Blob`.
- In Node.js, when you pass a string path (e.g., `/path/to/image.png`), the SDK sets the multipart filename to the basename of the path (e.g., `image.png`). You can also pass an object with `{ stream, filename, contentType }` to control metadata explicitly.

You can also expire uploads automatically by specifying a TTL when finalizing image uploads:

```ts
await sdk.images.createFromFile('/path/to/image.png', { ttlSeconds: 3600 });
```

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
