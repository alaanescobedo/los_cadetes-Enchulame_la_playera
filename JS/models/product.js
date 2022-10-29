/**
 * 
 * @param {{
 * name: string,
 * description: string,
 * description_short: string,
 * email: string,
 * price: string,
 * category: string,
 * image: string,
 * }} product 
 * @returns 
 */
export const createLocalProduct = (product) => ({
  name: product.name,
  description: product.description,
  description_short: product.description_short,
  price: product.price,
  category: product.category,
  img: product.image,
  stock: Number(product.stock)
})