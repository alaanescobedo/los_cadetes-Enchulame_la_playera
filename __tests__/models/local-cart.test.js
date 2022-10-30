import { createCartItem } from '../../src/JS/models/local-cart.js';

const PRODUCT = {
  id: 1,
  name: 'Producto 1',
  price: 100,
  img: 'https://picsum.photos/200/300',
  description_short: 'Descripción del producto 1'
}

describe('local-cart.js', () => {
  describe('createCartItem', () => {
    it('Debería crear un producto para el carrito', () => {
      const item = createCartItem(PRODUCT);
      expect(item).toEqual({
        ...PRODUCT,
        quantity: 1
      });
      expect(item).not.toStrictEqual(PRODUCT);
    });
  });
});