# Changelog

## Unreleased

### Added

- Added the `onRequestError` hook to `createSDK`/`createDirectorySDK` for centralized HTTP retry handling.
- Exposed `ws.disconnect()` on the websocket client to support explicit shutdown.

### Usage

```ts
const sdk = createSDK({
    authToken: getCurrentToken,
    onRequestError: async ({ error }, { attempt }) => {
        if (error.status === 401 && attempt === 1) {
            await refreshToken();
            return { retry: true, invalidateToken: true, backoffMs: 200 };
        }

        return { retry: false };
    },
});
```
