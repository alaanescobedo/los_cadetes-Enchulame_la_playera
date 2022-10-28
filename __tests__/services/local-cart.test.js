import { jest } from '@jest/globals';
import {
  addCartItem,
  clearCartItems,
  getCartItems,
  getTotalPrice,
  getTotalPriceByProduct,
  removeCartItem
} from '../../JS/services/local-cart.js';
import mockLocalStorage from '../../JS/utils/local-storage.js';

const PRODUCT = {
  id: 1,
  name: 'Producto 1',
  price: 100,
  image: 'https://picsum.photos/200/300',
  description: 'Descripción del producto 1'
};
const CART_ITEM = {
  ...PRODUCT,
  quantity: 1
}

describe('local-cart.js', () => {

  beforeEach(() => {
    localStorage.clear()
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('addCartItem', () => {
    it('Debería agregar un producto al carrito si esta vacio', () => {
      mockLocalStorage.read = jest.fn().mockImplementation(() => null);
      addCartItem(PRODUCT);
      expect(mockLocalStorage.read).toHaveBeenCalledTimes(1);
      expect(mockLocalStorage.write).toHaveBeenCalledTimes(1);
    });
  });
  describe('getCartItems', () => {
    it('Debería obtener obtener el carro vacio', () => {
      const cart = getCartItems();
      expect(cart).toEqual([]);
    });
  });
  describe('getTotalPrice', () => { });
  describe('getTotalPriceByProduct', () => { });
  describe('clearCartItems', () => { });
  describe('createCartItem', () => { });
  describe('removeCartItem', () => { });
});