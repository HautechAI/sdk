![sdk-server](https://github.com/HautechAI/sdk/actions/workflows/main.yml/badge.svg?branch=main)
![npm version](https://badge.fury.io/js/%40hautechai%2Fsdk.svg)

# Hautech SDK

## Installation

```bash
npm install @hautechai/sdk
# or
yarn add @hautechai/sdk
```

# Usage

## Creating tokens

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

### Root token

For creating token that can be used on server side, you can create a root token.

```ts
const rootToken = signer.createRootToken({ expiresInSeconds: 3600 });
```

It's very not recommended to use root token on client side.

### Account token

For creating token that can be used on client side by your users, you can create an account token.

```ts
const accountToken = signer.createAccountToken({ accountId: 'ACCOUNT_ID', expiresInSeconds: 3600 });
```

## Initializing SDK

To initialize the SDK, you need to pass the function that returns the token to the `createSDK` function.

```ts
import { createSDK } from '@hautechai/sdk';

const sdk = createSDK({ authToken: () => accountToken }); // you should call the server here for getting the token
```

## Using SDK

Docs about how to use the SDK are available [here](https://docs.hautech.ai/)
