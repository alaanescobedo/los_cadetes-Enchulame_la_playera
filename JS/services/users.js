import { ENDPOINT } from '../constants/index.js'
import fetch from '../utils/fetch.js'

export const mockLoginUser = ({ _data }) => fetch.get(`${ENDPOINT.USERS}/1`)

export const getUserById = (id) => fetch.get(`${ENDPOINT.USERS}/${id}`)
  .catch(err => { throw err })

export const loginUser = ({ data }) => fetch.post(`${ENDPOINT.AUTH}/login`, {
  data
})

export const registerUser = ({ data }) => fetch.post(`${ENDPOINT.AUTH}`, {
  data
}).catch(err => { throw err })

export default {
  register: registerUser,
  getById: getUserById,
  login: loginUser
}