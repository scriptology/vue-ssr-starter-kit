import axios from 'axios'

export const HTTP = axios.create({
  baseURL: 'https://content.guardianapis.com/',
  headers: {
    Authorization: 'Bearer {token}'
  }
})
