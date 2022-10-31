import { ENDPOINT } from '../constants/index.js'
import fetch from '../utils/fetch.js'

export const mockLoginUser = (_data) => fetch.get(`${ENDPOINT.USERS}/1`)

export const loginUser = ({ data }) => fetch.post(`${ENDPOINT.USERS}`, {
  body: data
})

export const registerUser = ({ data }) => fetch.post(`${ENDPOINT.USERS}`, {
  body: data
}).catch(err => { throw err })

export default {
  register: registerUser,
  login: loginUser
}