/**
 * 
 * @param {{
 * id: number,
 * name: string,
 * email: number,
 * : string,
 * description: string
 * }} product 
 * @returns 
 */
export const createLocalUser = (user) => ({
  id: user.id,
  username: user.username,
  email: user.email
})