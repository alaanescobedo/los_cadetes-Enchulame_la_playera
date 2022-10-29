import { jest } from '@jest/globals';
import { ENDPOINT } from '../../JS/constants/index.js';
import { registerUser, getUserById } from '../../JS/services/users.js';
import { ERROR_REASON } from '../constants/index.js';
import mockFetch from '../../JS/utils/fetch.js';

const MY_ID = 1
const USER_DATA = {
  name: 'Test',
  email: 'test@email.com',
  password: '123456'
}
const USER = {
  id: MY_ID,
  ...USER_DATA
}

describe('users', () => {

  beforeEach(() => {
    mockFetch.get = jest.fn().mockImplementation(() => Promise.resolve(USER));
    mockFetch.post = jest.fn().mockImplementation(() => Promise.resolve(USER));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('registerUser', () => {
    // Unitario
    it('Debe retornar un usuario', async () => {
      const response = await registerUser({ data: USER_DATA });
      expect(response).toStrictEqual(USER);
    });
    it('Debe retornar un error', async () => {
      mockFetch.post = jest.fn().mockImplementation(() => Promise.reject(ERROR_REASON));
      await expect(registerUser(USER_DATA)).rejects.toEqual(ERROR_REASON);
    });

    // Implentacion
    it('Debe llamar la funcion fetch con los parametros correctos', async () => {
      await registerUser({ data: USER_DATA });
      expect(mockFetch.post).toHaveBeenCalledWith(`${ENDPOINT.USERS}`, { data: USER_DATA });
      expect(mockFetch.post).toHaveBeenCalledTimes(1);
    });
  });

  describe('getUserById', () => {

    // Unitario
    it('Debe retornar un usuario', async () => {
      const response = await getUserById(MY_ID);
      expect(response).toStrictEqual(USER);
    });
    it('Debe retornar un error', async () => {
      mockFetch.get = jest.fn().mockImplementation(() => Promise.reject(ERROR_REASON));
      await expect(getUserById(MY_ID)).rejects.toEqual(ERROR_REASON);
    });

    // Implentacion
    it('Debe llamar la funcion fetch con los parametros correctos', async () => {
      await getUserById(MY_ID);
      expect(mockFetch.get).toHaveBeenCalledWith(`${ENDPOINT.USERS}/${MY_ID}`);
      expect(mockFetch.get).toHaveBeenCalledTimes(1);
    });
  });
});