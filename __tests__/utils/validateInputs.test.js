import { jest } from '@jest/globals'
import { validateInputs } from '../../JS/utils/validateInputs.js';

const vaildInput = {
  checkValidity: () => true,
  classList: { remove: jest.fn() }
}
const invalidInput = {
  checkValidity: () => false,
  classList: { add: jest.fn() }
}

describe('validateInputs', () => {

  it('Debe retornar TRUE si todos los inputs son validos', () => {
    expect(validateInputs([vaildInput, vaildInput])).toBeTruthy();
  });
  it('Debe retornar FALSE si algun archivo es invalido', () => {
    expect(validateInputs([vaildInput, invalidInput])).toBeFalsy();
  });
  it('Debe retornar FALSE si todos los archivos son invalidos', () => {
    expect(validateInputs([invalidInput, invalidInput])).toBeFalsy();
  });
  it('Debe retornar FALSE si no se le pasa ningun input', () => {
    expect(validateInputs()).toBeFalsy();
  });

})
