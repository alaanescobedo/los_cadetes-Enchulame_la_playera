import { jest } from '@jest/globals';
import { get, post } from '../../src/JS/utils/fetch.js';

const METHODS = {
  GET: 'GET',
  POST: 'POST',
}
const TEST_URL = 'http://test.com';
const MOCK_RESPONSE = { data: 'test' };

const mockFetchPromise = Promise.resolve({
  json: () => Promise.resolve(MOCK_RESPONSE),
});

describe('fetch', () => {

  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('get', () => {
    it('Debe retornar la data', async () => {
      const data = await get(TEST_URL);
      expect(data).toEqual(MOCK_RESPONSE);
    });
    it('Debe llamarse una vez el fetch', async () => {
      await get(TEST_URL);
      expect(fetch).toHaveBeenCalledTimes(1);
    });
    it('Debe llamarse el fetch con los parametros correctos', async () => {
      await get(TEST_URL);
      expect(fetch).toHaveBeenCalledWith(TEST_URL, { method: METHODS.GET, headers: {} });
      await get(TEST_URL, { headers: { 'Content-Type': 'application/json' } });
      expect(fetch).toHaveBeenCalledWith(TEST_URL, { method: METHODS.GET, headers: { 'Content-Type': 'application/json' } });
    });
    it('Debe retornar un error', async () => {
      global.fetch = jest.fn().mockImplementation(() => Promise.reject('error'));
      await expect(get(TEST_URL)).rejects.toEqual('error');
    })
  });

  describe('post', () => {
    it('Debe retornar la data', async () => {
      const data = await post(TEST_URL, { body: MOCK_RESPONSE });
      expect(data).toEqual(MOCK_RESPONSE);
    });
    it('Debe llamarse una vez el fetch', async () => {
      await post(TEST_URL, { body: MOCK_RESPONSE });
      expect(fetch).toHaveBeenCalledTimes(1);
    });
    it('Debe llamarse el fetch con los parametros correctos', async () => {
      await post(TEST_URL, { body: MOCK_RESPONSE });
      expect(fetch).toHaveBeenCalledWith(TEST_URL, {
        method: METHODS.POST,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(MOCK_RESPONSE),
      });
    });
    it('Debe retornar un error', async () => {
      global.fetch = jest.fn().mockImplementation(() => Promise.reject('error'));
      await expect(post(TEST_URL, { body: MOCK_RESPONSE })).rejects.toEqual('error');
    })
  });

});