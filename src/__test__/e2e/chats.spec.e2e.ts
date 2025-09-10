import { beforeAll, describe, expect, it } from 'vitest';
import { createTestSdk } from '../test-utils';
import { v4 } from 'uuid';

describe('Chats API E2E Tests', () => {
    let sdk = createTestSdk();
    let createdChatId: string;

    beforeAll(async () => {
        // Create a test chat for use in other tests
        const chat = await sdk.chats.create({
            chatId: v4(),
            modelName: 'gpt-3.5-turbo',
            parameters: {
                max_completion_tokens: 1000,
                seed: 123,
            },
        });
        createdChatId = chat.id;
    });

    describe('Chat CRUD Operations', () => {
        it('should create a new chat', async () => {
            const chatData = {
                chatId: v4(),
                modelName: 'gpt-4',
                parameters: {
                    max_completion_tokens: 2000,
                    seed: 456,
                },
            };

            const result = await sdk.chats.create(chatData);

            expect(result).toBeDefined();
            expect(result.id).toBeDefined();
            expect(result.chatId).toBeDefined();
            expect(result.modelName).toBe(chatData.modelName);
            expect(result.creatorId).toBeDefined();
            expect(result.parameters).toBeDefined();
            expect(result.parameters.max_completion_tokens).toBe(chatData.parameters.max_completion_tokens);
            expect(result.parameters.seed).toBe(chatData.parameters.seed);
            expect(result.items).toBeDefined();
            expect(Array.isArray(result.items)).toBe(true);
            expect(result.createdAt).toBeDefined();
            expect(result.updatedAt).toBeDefined();
        });

        it('should create a chat with minimal data', async () => {
            const result = await sdk.chats.create({
                chatId: v4(),
                modelName: 'gpt-3.5-turbo',
                parameters: {},
            });

            expect(result).toBeDefined();
            expect(result.id).toBeDefined();
            expect(result.chatId).toBeDefined();
            expect(result.modelName).toBe('gpt-3.5-turbo');
            expect(result.creatorId).toBeDefined();
            expect(result.parameters).toBeDefined();
            expect(result.items).toBeDefined();
            expect(Array.isArray(result.items)).toBe(true);
            expect(result.createdAt).toBeDefined();
            expect(result.updatedAt).toBeDefined();
        });

        it('should get a specific chat', async () => {
            expect(createdChatId).toBeDefined();

            const result = await sdk.chats.get(createdChatId);

            expect(result).toBeDefined();
            expect(result!.id).toBe(createdChatId);
            expect(result!.chatId).toBeDefined();
            expect(result!.modelName).toBe('gpt-3.5-turbo');
            expect(result!.creatorId).toBeDefined();
            expect(result!.parameters).toBeDefined();
            expect(result!.parameters.max_completion_tokens).toBe(1000);
            expect(result!.parameters.seed).toBe(123);
            expect(result!.items).toBeDefined();
            expect(Array.isArray(result!.items)).toBe(true);
            expect(result!.createdAt).toBeDefined();
            expect(result!.updatedAt).toBeDefined();
        });

        it('should get a non-existent chat', async () => {
            const result = await sdk.chats.get(v4());
            expect(result).toBeNull();
        });

        it('should list chats', async () => {
            const result = await sdk.chats.list();

            expect(result).toBeDefined();
            expect(result.data).toBeDefined();
            expect(Array.isArray(result.data)).toBe(true);
            expect(result.pageInfo).toBeDefined();

            const createdChat = result.data.find((chat) => chat.id === createdChatId);
            expect(createdChat).toBeDefined();
            expect(createdChat?.modelName).toBe('gpt-3.5-turbo');
        });

        it('should list chats with pagination', async () => {
            // Create a few more chats for pagination testing
            for (let i = 0; i < 3; i++) {
                await sdk.chats.create({
                    chatId: v4(),
                    modelName: 'gpt-3.5-turbo',
                    parameters: {
                        max_completion_tokens: 500 + i * 100,
                        seed: 100 + i,
                    },
                });
            }

            const result = await sdk.chats.list({
                limit: 2,
                cursor: undefined, // First page
            });

            expect(result).toBeDefined();
            expect(result.data).toBeDefined();
            expect(Array.isArray(result.data)).toBe(true);
            expect(result.data.length).toBeLessThanOrEqual(2);
            expect(result.pageInfo).toBeDefined();

            if (result.pageInfo.nextCursor) {
                const nextPageResult = await sdk.chats.list({
                    limit: 2,
                    cursor: result.pageInfo.nextCursor,
                });

                expect(nextPageResult).toBeDefined();
                expect(nextPageResult.data).toBeDefined();
                expect(Array.isArray(nextPageResult.data)).toBe(true);
                expect(nextPageResult.data.length).toBeLessThanOrEqual(2);
                expect(nextPageResult.pageInfo).toBeDefined();
                expect(nextPageResult.data).not.toMatchObject(result.data);
            }
        });

        it('should delete a chat', async () => {
            // Create a chat specifically for deletion
            const chatToDelete = await sdk.chats.create({
                chatId: v4(),
                modelName: 'gpt-3.5-turbo',
                parameters: {
                    max_completion_tokens: 500,
                },
            });

            // Delete the chat
            await sdk.chats.delete(chatToDelete.id);

            // Verify the chat is deleted by trying to get it
            const result = await sdk.chats.get(chatToDelete.id);
            expect(result).toBeNull();
        });
    });

    describe('Chat Items Operations', () => {
        let chatForItems: any;

        beforeAll(async () => {
            // Create a chat specifically for testing items
            chatForItems = await sdk.chats.create({
                chatId: v4(),
                modelName: 'gpt-3.5-turbo',
                parameters: {
                    max_completion_tokens: 1000,
                },
            });
        });

        it('should add items to a chat', async () => {
            const itemsData = {
                items: [
                    {
                        role: 'user',
                        content: 'Hello, how are you?',
                    },
                    {
                        role: 'assistant',
                        content: 'I am doing well, thank you for asking! How can I help you today?',
                    },
                ],
            };

            const result = await sdk.chats.addItems(chatForItems.id, itemsData);

            expect(result).toBeDefined();
            expect(result.id).toBe(chatForItems.id);
            expect(result.items).toBeDefined();
            expect(Array.isArray(result.items)).toBe(true);
            expect(result.items.length).toBeGreaterThanOrEqual(itemsData.items.length);

            // Check that the added items are present
            const lastItems = result.items.slice(-itemsData.items.length);
            expect(lastItems).toHaveLength(itemsData.items.length);
            expect(lastItems[0].role).toBe('user');
            expect(lastItems[0].content).toBe('Hello, how are you?');
            expect(lastItems[1].role).toBe('assistant');
            expect(lastItems[1].content).toBe('I am doing well, thank you for asking! How can I help you today?');
        });

        it('should add single item to a chat', async () => {
            const itemsData = {
                items: [
                    {
                        role: 'user',
                        content: 'What is the weather like today?',
                    },
                ],
            };

            const result = await sdk.chats.addItems(chatForItems.id, itemsData);

            expect(result).toBeDefined();
            expect(result.id).toBe(chatForItems.id);
            expect(result.items).toBeDefined();
            expect(Array.isArray(result.items)).toBe(true);

            // Check that the added item is present
            const lastItem = result.items[result.items.length - 1];
            expect(lastItem.role).toBe('user');
            expect(lastItem.content).toBe('What is the weather like today?');
        });

        it('should handle adding empty items array', async () => {
            const itemsData = {
                items: [],
            };

            const result = await sdk.chats.addItems(chatForItems.id, itemsData);

            expect(result).toBeDefined();
            expect(result.id).toBe(chatForItems.id);
            expect(result.items).toBeDefined();
            expect(Array.isArray(result.items)).toBe(true);
        });
    });

    describe('Error Handling', () => {
        it('should create chat with any model name', async () => {
            // API accepts any model name - this is not an error case
            const result = await sdk.chats.create({
                chatId: v4(),
                modelName: 'non-existent-model-12345',
                parameters: {},
            });

            expect(result).toBeDefined();
            expect(result.modelName).toBe('non-existent-model-12345');
        });

        it('should handle getting chat with invalid ID format', async () => {
            await expect(sdk.chats.get('invalid-id-format')).rejects.toThrow();
        });

        it('should handle deleting non-existent chat', async () => {
            await expect(sdk.chats.delete(v4())).rejects.toThrow();
        });

        it('should handle adding items to non-existent chat', async () => {
            const itemsData = {
                items: [
                    {
                        role: 'user',
                        content: 'Hello',
                    },
                ],
            };

            await expect(sdk.chats.addItems(v4(), itemsData)).rejects.toThrow();
        });

        it('should create chat with any parameter values', async () => {
            // API accepts any parameter values - this is not an error case
            const result = await sdk.chats.create({
                chatId: v4(),
                modelName: 'gpt-3.5-turbo',
                parameters: {
                    max_completion_tokens: -100, // API accepts any value
                },
            });

            expect(result).toBeDefined();
            expect(result.parameters.max_completion_tokens).toBe(-100);
        });

        it('should handle invalid item roles', async () => {
            const itemsData = {
                items: [
                    {
                        role: 'invalid-role' as any,
                        content: 'This should fail',
                    },
                ],
            };

            await expect(sdk.chats.addItems(createdChatId, itemsData)).rejects.toThrow();
        });
    });

    describe('Edge Cases', () => {
        it('should handle chat with very long content', async () => {
            const longContent = 'A'.repeat(10000); // 10k characters
            const itemsData = {
                items: [
                    {
                        role: 'user',
                        content: longContent,
                    },
                ],
            };

            const result = await sdk.chats.addItems(createdChatId, itemsData);

            expect(result).toBeDefined();
            expect(result.items).toBeDefined();
            const lastItem = result.items[result.items.length - 1];
            expect(lastItem.content).toBe(longContent);
        });

        it('should handle chat with special characters in content', async () => {
            const specialContent = '🚀 Hello! @#$%^&*()_+-=[]{}|;:,.<>? "quotes" \'apostrophes\' \n\t\r';
            const itemsData = {
                items: [
                    {
                        role: 'user',
                        content: specialContent,
                    },
                ],
            };

            const result = await sdk.chats.addItems(createdChatId, itemsData);

            expect(result).toBeDefined();
            expect(result.items).toBeDefined();
            const lastItem = result.items[result.items.length - 1];
            expect(lastItem.content).toBe(specialContent);
        });

        it('should handle multiple rapid operations on same chat', async () => {
            const testChat = await sdk.chats.create({
                chatId: v4(),
                modelName: 'gpt-3.5-turbo',
                parameters: {},
            });

            // Perform multiple operations rapidly
            const operations = [
                sdk.chats.get(testChat.id),
                sdk.chats.addItems(testChat.id, { items: [{ role: 'user', content: 'Test 1' }] }),
                sdk.chats.addItems(testChat.id, { items: [{ role: 'user', content: 'Test 2' }] }),
            ];

            const results = await Promise.all(operations);

            // All operations should succeed
            expect(results[0]).toBeDefined(); // First get
            expect(results[1]).toBeDefined(); // First addItems
            expect(results[2]).toBeDefined(); // Second addItems

            // Final state should have items from the operations
            const finalChat = await sdk.chats.get(testChat.id);

            expect(finalChat!.items.length).toBeGreaterThanOrEqual(1);
        });
    });
});
