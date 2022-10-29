/**
 * 
 * @param {{
 * id: number,
 * name: string,
 * price: number,
 * img: string,
 * description: string
 * }} product 
 * @returns 
 */
export const createCartItem = (product) => ({
  id: product.id,
  name: product.name,
  price: product.price,
  quantity: 1,
  img: product.img,
})