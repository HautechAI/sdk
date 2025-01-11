module.exports = {
    preset: 'ts-jest',
    setupFiles: ['dotenv/config'],
    setupFilesAfterEnv: ['./jest.setup.js'],
    testEnvironment: 'jsdom',
    testTimeout: 60000,
};
