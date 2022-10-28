import { jest } from '@jest/globals';
import {
  writeLocalStorage,
  readLocalStorage,
  removeLocalStorage,
  clearLocalStorage
} from '../../JS/utils/local-storage.js';

jest.spyOn(Storage.prototype, 'setItem');
jest.spyOn(Storage.prototype, 'getItem');
jest.spyOn(Storage.prototype, 'removeItem');
jest.spyOn(Storage.prototype, 'clear');

const KEY_A = 'key_A';
const KEY_B = 'key_B';
const VALUES = ['value', 1, true, { a: 1 }, [1, 2, 3]];

describe('local storage', () => {
  describe('writeLocalStorage', () => {
    it('Debe escribir en localStorage', () => {
      VALUES.forEach((value) => writeLocalStorage(KEY_A, value));
      VALUES.forEach((value) => expect(localStorage.setItem).toHaveBeenCalledWith(KEY_A, JSON.stringify(value)));
      expect(localStorage.setItem).toHaveBeenCalledTimes(VALUES.length);
    });
  });

  describe('readLocalStorage', () => {
    it('Debe leer de localStorage', () => {
      VALUES.forEach(() => readLocalStorage(KEY_A));
      VALUES.forEach(() => expect(localStorage.getItem).toHaveBeenCalledWith(KEY_A));
      expect(localStorage.getItem).toHaveBeenCalledTimes(VALUES.length);
    });
  });

  describe('removeLocalStorage', () => {
    it('Debe eliminar de localStorage', () => {
      writeLocalStorage(KEY_A, VALUES[0]);
      writeLocalStorage(KEY_B, VALUES[1]);
      removeLocalStorage(KEY_A);
      expect(localStorage.removeItem).toHaveBeenCalledWith(KEY_A);
      expect(localStorage.removeItem).toHaveBeenCalledTimes(1);
      expect(readLocalStorage(KEY_A)).toBeNull();
      expect(readLocalStorage(KEY_B)).toBe(VALUES[1]); 
    });
  });

  describe('clearLocalStorage', () => {
    it('Debe limpiar localStorage', () => {
      writeLocalStorage(KEY_A, VALUES[0]);
      writeLocalStorage(KEY_B, VALUES[1]);
      clearLocalStorage();
      expect(localStorage.clear).toHaveBeenCalledTimes(1);
      expect(readLocalStorage(KEY_A)).toBeNull();
      expect(readLocalStorage(KEY_B)).toBeNull();
    });
  });

});