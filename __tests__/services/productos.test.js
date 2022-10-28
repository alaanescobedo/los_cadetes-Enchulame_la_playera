import { jest } from '@jest/globals';
import { ENDPOINT } from '../../JS/constants/index.js';
import {
  postProduct,
  getAllProducts,
  getProductById,
  getProductByCategory
} from '../../JS/services/products';
import mockFetch from '../../JS/utils/fetch.js';
import { ERROR_REASON } from '../constants/index.js';

const MY_ID = 1
const PRODUCT_DATA = {
  NAME: 'Test',
  PRICE: 100,
  DESCRIPTION: 'test',
  IMG: 'https://test.com',
  STOCK: 100,
  CATEGORY: 'test'
}
const product = {
  id: MY_ID,
  ...PRODUCT_DATA
}

describe('products service', () => {

  beforeEach(() => {
    mockFetch.get = jest.fn().mockImplementation(() => Promise.resolve(product));
    mockFetch.post = jest.fn().mockImplementation(() => Promise.resolve(product));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('postProduct', () => {
    // Unitario
    it('Debe retornar un producto', async () => {
      const response = await postProduct({ data: PRODUCT_DATA });
      expect(response).toStrictEqual(product);
    });
    it('Debe retornar un error', async () => {
      mockFetch.post = jest.fn().mockImplementation(() => Promise.reject(`${ERROR_REASON}`));
      await expect(postProduct(PRODUCT_DATA)).rejects.toEqual(`${ERROR_REASON}`);
    });

    // Implentacion
    it('Debe llamar la funcion fetch con los parametros correctos', async () => {
      await postProduct({ data: PRODUCT_DATA });
      expect(mockFetch.post).toHaveBeenCalledWith(`${ENDPOINT.PRODUCTS}`, { body: PRODUCT_DATA });
      expect(mockFetch.post).toHaveBeenCalledTimes(1);
    });
  });

  describe('getAllProducts', () => {

    beforeEach(() => {
      mockFetch.get = jest.fn().mockImplementation(() => Promise.resolve([product, product]));
    });

    it('Debe retornar un 2 productos', async () => {
      const response = await getAllProducts();
      expect(response).toStrictEqual([product, product]);
    });
    it('Debe atrapar un error', async () => {
      mockFetch.get = jest.fn().mockImplementation(() => Promise.reject(`${ERROR_REASON}`));
      await expect(getAllProducts()).rejects.toEqual(`${ERROR_REASON}`);
    });

    // Implentacion
    it('Debe llamar la funcion fetch con los parametros correctos', async () => {
      await getAllProducts();
      expect(mockFetch.get).toHaveBeenCalledWith(`${ENDPOINT.PRODUCTS}`);
      expect(mockFetch.get).toHaveBeenCalledTimes(1);
    });
  });

  describe('getProductById', () => {

    // Unitario
    it('Debe retornar un producto', async () => {
      const response = await getProductById(MY_ID);
      expect(response).toStrictEqual(product);
    });
    it('Debe retornar un error', async () => {
      mockFetch.get = jest.fn().mockImplementation(() => Promise.reject(`${ERROR_REASON}`));
      await expect(getProductById(MY_ID)).rejects.toEqual(`${ERROR_REASON}`);
    });

    // Implentacion
    it('Debe llamar la funcion fetch con los parametros correctos', async () => {
      await getProductById(MY_ID);
      expect(mockFetch.get).toHaveBeenCalledWith(`${ENDPOINT.PRODUCTS}/${MY_ID}`);
      expect(mockFetch.get).toHaveBeenCalledTimes(1);
    });
  });

  describe('getProductByCategory', () => {
    // Unitario
    it('Debe retornar un producto', async () => {
      const response = await getProductByCategory(PRODUCT_DATA.CATEGORY);
      expect(response).toStrictEqual(product);
    });
    it('Debe retornar un error', async () => {
      mockFetch.get = jest.fn().mockImplementation(() => Promise.reject(`${ERROR_REASON}`));
      await expect(getProductByCategory(PRODUCT_DATA.CATEGORY)).rejects.toEqual(`${ERROR_REASON}`);
    });

    // Implentacion
    it('Debe llamar la funcion fetch con los parametros correctos', async () => {
      await getProductByCategory(PRODUCT_DATA.CATEGORY);
      expect(mockFetch.get).toHaveBeenCalledWith(`${ENDPOINT.PRODUCTS}/category/${PRODUCT_DATA.CATEGORY}`);
      expect(mockFetch.get).toHaveBeenCalledTimes(1);
    });
  });


});