import { readLocalStorage, writeLocalStorage } from '../utils/local-storage.js'
import { createCartItem } from '../models/local-cart.js'
import { STORAGE_KEYS } from '../constants/storage-keys.js'

export const addCartItem = (product) => {
  let cart = readLocalStorage(STORAGE_KEYS.CART) || [];

  const item = cart.find(item => item.id === product.id);
  if (item === null) cart.push(createCartItem(product));
  else {
    cart.push(createCartItem(product, item.quantity + 1));
  }
  writeLocalStorage(STORAGE_KEYS.CART, cart)
}
export const removeCartItem = (id) => {
  let cart = readLocalStorage(STORAGE_KEYS.CART)
  if (cart === null) return
  const item = cart.find((item) => item.id === id)
  if (item === null) return
  cart = cart.filter((item) => item.id !== id)
  writeLocalStorage(STORAGE_KEYS.CART, cart)
}
export const getTotalPrice = () => {
  let cart = readLocalStorage(STORAGE_KEYS.CART)
  if (cart === null) return
  return cart.reduce((total, item) => total + item.quantity * item.price, 0)
}
export const getTotalPriceByProduct = (id) => {
  let cart = readLocalStorage(STORAGE_KEYS.CART)
  if (cart === null) return
  const item = cart.filter((item) => item.id === id)
  if (item.length === 0) return
  return item[0].quantity * item[0].price
}
export const getCartItems = () => readLocalStorage(STORAGE_KEYS.CART)
export const clearCartItems = () => writeLocalStorage(STORAGE_KEYS.CART, [])

export default {
  addItem: addCartItem,
  getTotalPrice,
  getTotalPriceByProduct,
  getItems: getCartItems,
  removeItem: removeCartItem,
  clearItems: clearCartItems
}