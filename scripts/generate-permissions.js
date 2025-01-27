#!/bin/node

const url = process.argv[2];
const outputFilePath = process.argv[3];

const loadPermissions = async () => {
    const response = await fetch(url);
    const data = await response.json();

    const output = {};

    // Process each permission string into nested structure
    data.forEach((permission) => {
        const parts = permission.split(':');
        let current = output;

        // Build nested objects for each part
        for (let i = 0; i < parts.length - 1; i++) {
            const part = parts[i];
            if (!current[part]) {
                current[part] = {};
            }
            current = current[part];
        }

        // Set the final property to boolean type
        const lastPart = parts[parts.length - 1];
        current[lastPart] = 'boolean';
    });

    // Convert to TypeScript interface string
    const generateTypeString = (obj, indent = '') => {
        const entries = Object.entries(obj);
        if (entries.length === 0) return '{}';

        return `{\n${entries
            .map(([key, value]) => {
                const valueStr = typeof value === 'string' ? value : generateTypeString(value, indent + '    ');
                return `${indent}    ${key}: ${valueStr};`;
            })
            .join('\n')}\n${indent}}`;
    };

    const typeString = generateTypeString(output);

    const fs = require('fs');

    const fileContent = `// This file is auto-generated. Do not edit manually.
export type MethodsPermissions = ${typeString};`;

    fs.writeFileSync(outputFilePath, fileContent);
};

loadPermissions();
