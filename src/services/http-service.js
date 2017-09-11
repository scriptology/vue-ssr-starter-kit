import axios from 'axios'

export const HTTP = axios.create({
  baseURL: 'http://www.gq.ru/api/',
  headers: {
    Authorization: 'Bearer {token}'
  }
})
