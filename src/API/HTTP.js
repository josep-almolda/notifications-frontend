import humps from 'humps'
//import { fetch } from 'whatwg-fetch'
import { fetchWrapper } from './fetchWrapper'

// use local api if no url defined in env
const API_BASE_URL =
  process.env.API_BASE_URL || 'https://localhost:44309/api/'

class HTTP {
  constructor() {
    this.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }

  getHeaders = () => this.headers

  get = (url) =>
    fetchWrapper(() => {
      const res = fetch(`${API_BASE_URL}${url}`, {
        method: 'GET',
        headers: this.getHeaders()
      })
      return res
    })

  post = (url, data = {}) =>
    fetchWrapper(() =>
      fetch(`${API_BASE_URL}${url}`, {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify(humps.decamelizeKeys(data))
      })
    )

  put = (url, data = {}, version = 1) =>
    fetchWrapper(() =>
      fetch(`${API_BASE_URL}${url}`, {
        method: 'PUT',
        headers: this.getHeaders(),
        body: JSON.stringify(humps.decamelizeKeys(data))
      })
    )

  delete = (url, data = {}, version = 1) =>
    fetchWrapper(() =>
      fetch(`${API_BASE_URL}${url}`, {
        method: 'DELETE',
        headers: this.getHeaders(),
        body: JSON.stringify(humps.decamelizeKeys(data))
      })
    )
}

export { HTTP }
export default new HTTP()
