import { test, expect, request as playwrightRequest } from '@playwright/test';

test('my api GET test', async () => {
  const context = await playwrightRequest.newContext({
    baseURL: 'https://jsonplaceholder.typicode.com',
  });
  const response = await context.get('/users/2');
  await expect(response).toBeOK();
  const data = await response.json();
  expect(data.id).toBe(2);
});
test('my api POST test', async () => {
  const context = await playwrightRequest.newContext({
    baseURL: 'https://jsonplaceholder.typicode.com',
  });
  const response = await context.post('/posts', {
    data: { title: 'foo', body: 'bar', userId: 1 },
  });
  await expect(response.status()).toBe(201);
  const data = await response.json();
  expect(data.id).toBeDefined();
});
test('create post and verify it exists', async () => {
  const context = await playwrightRequest.newContext({
    baseURL: 'https://jsonplaceholder.typicode.com',
  });
  const postResponse = await context.post('/posts', {
    data: { title: 'My new post', body: 'My long description about this request', userId: 911 },
  });
  const postData = await postResponse.json();
  expect(postData.title).toBe('My new post');
});
test('my api DELETE test', async () => {
  const context = await playwrightRequest.newContext({
    baseURL: 'https://jsonplaceholder.typicode.com',
  });
  const deleteResponse = await context.delete('/posts/1', {});
  expect(deleteResponse.status()).toBe(200);
  const body = await deleteResponse.json();
  expect(JSON.stringify(body)).toBe('{}');
});
