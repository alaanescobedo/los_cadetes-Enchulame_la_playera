import { jest } from '@jest/globals';
import {
  addCartItem,
  clearCartItems,
  getCartItems,
  getTotalPrice,
  getTotalPriceByProduct,
  removeCartItem
} from '../../src/JS/services/local-cart.js';
import mockLocalStorage from '../../src/JS/utils/local-storage.js';

const PRODUCT = {
  id: 1,
  name: 'Producto 1',
  price: 100,
  img: 'https://picsum.photos/200/300',
  description: 'Descripción del producto 1',
  description_short: 'Descripción corta del producto 1',
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
      mockLocalStorage.read = jest.fn()
      addCartItem(PRODUCT);
      expect(getCartItems()).toEqual([CART_ITEM]);
    });
  });
  describe('getCartItems', () => {
    it('Debería obtener obtener el carro con 1 elemento', () => {
      addCartItem(PRODUCT);
      const cart = getCartItems();
      expect(cart).toEqual([CART_ITEM]);
    });
  });
  describe('getTotalPrice', () => { });
  describe('getTotalPriceByProduct', () => { });
  describe('clearCartItems', () => { });
  describe('createCartItem', () => { });
  describe('removeCartItem', () => { });
});