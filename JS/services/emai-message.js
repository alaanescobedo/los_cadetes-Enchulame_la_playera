import { ENDPOINT } from "../constants/endpoints.js"
import fetch from "../utils/fetch.js"

export const sendEmail = ({ data }) => fetch.post(`${ENDPOINT.EMAIL}`, {
  body: data
}).catch(err => { throw err })

export default {
  send: sendEmail
}