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
test('PATCH /posts/1 - partial update', async () => {
  const context = await playwrightRequest.newContext({
    baseURL: 'https://jsonplaceholder.typicode.com',
  });
  const response = await context.patch('/posts/1', {
    data: { title: 'Updated title' },
  });
  await expect(response).toBeOK();
  expect(response.status()).toBe(200);
  const data = await response.json();
  expect(data.title).toBe('Updated title');
  expect(data.id).toBe(1);
});
test('PUT /posts/1 - full update', async () => {
  const context = await playwrightRequest.newContext({
    baseURL: 'https://jsonplaceholder.typicode.com',
  });
  const response = await context.put('/posts/1', {
    data: { id: 1, title: 'Updated title', body: 'Updated body', userId: 1 },
  });
  await expect(response).toBeOK();
  expect(response.status()).toBe(200);
  const data = await response.json();
  expect(data.title).toBe('Updated title');
  expect(data.body).toBe('Updated body');
});
test('GET /posts with query param userId - filter by user', async () => {
  const context = await playwrightRequest.newContext({
    baseURL: 'https://jsonplaceholder.typicode.com',
  });
  const response = await context.get('/posts', {
    params: { userId: 1 },
  });
  await expect(response).toBeOK();
  const data = await response.json();
  expect(Array.isArray(data)).toBe(true);
  data.forEach((post: any) => {
    expect(post.userId).toBe(1);
  });
});
test('GET /posts/1 with custom headers', async () => {
  const context = await playwrightRequest.newContext({
    baseURL: 'https://jsonplaceholder.typicode.com',
  });
  const response = await context.get('/posts/1', {
    headers: {
      'Custom-Header': 'test-value',
      Accept: 'application/json',
    },
  });
  await expect(response).toBeOK();
  expect(response.headers()['content-type']).toContain('application/json');
});
