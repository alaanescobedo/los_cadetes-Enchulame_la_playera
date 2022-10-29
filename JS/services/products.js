import { ENDPOINT } from '../constants/index.js'
import { createLocalProduct } from '../models/product.js';
import fetch from '../utils/fetch.js'

export const postProduct = async ({ data }) => await fetch.post(`${ENDPOINT.PRODUCTS}`, { body: createLocalProduct(data) })

export const getAllProducts = async () => await fetch.get(`${ENDPOINT.PRODUCTS}`)

export const getProductById = async (id) => await fetch.get(`${ENDPOINT.PRODUCTS}/${id}`)

export const getProductByCategory = async (category) => await fetch.get(`${ENDPOINT.PRODUCTS}/category/${category}`)


export default {
  postOne: postProduct,
  get: getAllProducts,
  getById: getProductById,
  getByCategory: getProductByCategory
}