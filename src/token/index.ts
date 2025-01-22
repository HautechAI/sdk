import { defaultPermissions, defaultRootPermissions } from './permissions';
import { MethodsPermissions } from '../types';

const createPrivateKey = (key: string) => {
    const header = `-----BEGIN PRIVATE KEY-----\n`;
    const footer = `\n-----END PRIVATE KEY-----`;

    // @ts-ignore
    const keyBody = key.match(/.{1,64}/g).join('\n');
    return header + keyBody + footer;
};

// This function will not work in the browser
const createToken = (props: { appKeyId: string; appKeySecret: string; expiresInSeconds: number; payload: object }) => {
    const jwt = require('jsonwebtoken');
    const privateKey = createPrivateKey(props.appKeySecret);
    return jwt.sign(props.payload, privateKey, {
        algorithm: 'RS256',
        expiresIn: props.expiresInSeconds,
        keyid: props.appKeyId,
    });
};

export const createTokenSigner = (options: { appId: string; appKeyId: string; appKeySecret: string }) => ({
    createAccountToken: (props: {
        accountId: string;
        expiresInSeconds: number;
        permissions?: Partial<MethodsPermissions>;
    }) =>
        createToken({
            appKeyId: options.appKeyId,
            appKeySecret: options.appKeySecret,
            expiresInSeconds: props.expiresInSeconds,
            payload: {
                iss: options.appId,
                permissions: { ...defaultPermissions, ...(props.permissions ?? {}) },
                sub: props.accountId,
            },
        }),
    createRootToken: (props: { expiresInSeconds: number }) =>
        createToken({
            appKeyId: options.appKeyId,
            appKeySecret: options.appKeySecret,
            expiresInSeconds: props.expiresInSeconds ?? 3600,
            payload: {
                iss: options.appId,
                permissions: defaultRootPermissions,
            },
        }),
});
