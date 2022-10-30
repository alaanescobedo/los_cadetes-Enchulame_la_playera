export const get = async (url, { headers = {} } = {}) => {
  const requestOptions = {
    method: "GET",
    headers
  }
  const data = await fetch(url, requestOptions)
  return await data.json()
}

export const post = async (url, { body, headers = {} } = {}) => {
  const requestOptions = {
    method: "POST",
    headers:{
      "Content-Type": "application/json",
      ...headers
    },
    body: JSON.stringify(body)
  }
  const data = await fetch(url, requestOptions)
  return await data.json()
}

export default {
  get,
  post
}