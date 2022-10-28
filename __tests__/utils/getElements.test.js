import { jest } from '@jest/globals';
import { getElement, getAllElements } from '../../JS/utils/getElements.js';

describe('getElements', () => {

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getElement', () => {
    it('Debe retornar un elemento', () => {
      document.body.innerHTML = '<div id="test"></div>';
      const element = getElement('#test');
      expect(element).toBeInstanceOf(HTMLDivElement);
      expect(element.id).toBe('test');
    });
    it('Debe retornar un error si no encuentra el elemento', () => {
      document.body.innerHTML = '<div></div>';
      expect(() => getElement({ id: 'test' })).toThrow();
    });
  });

  describe('getAllElements', () => {
    it('Debe retornar una lista de elementos', () => {
      document.body.innerHTML = '<div class="test"></div><div class="test"></div>';
      const elements = getAllElements('.test');
      expect(elements).toBeInstanceOf(NodeList);
      expect(elements.length).toBe(2);
      expect(elements[0]).toBeInstanceOf(HTMLDivElement);
      expect(elements[0].className).toBe('test');
    });
    it('Debe retornar un error si no encuentra el elemento', () => {
      document.body.innerHTML = '<div></div>';
      expect(() => getAllElements({ className: 'test' })).toThrow();
    });
  });

});