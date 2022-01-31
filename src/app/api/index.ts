import axios, { AxiosRequestConfig } from 'axios'

const URL = 'https://whitelist-backend.herokuapp.com/api'

export type Endpoint = `/${string}`
export type Method = 'GET' | 'POST'

const getEndpoint = (endpoint: Endpoint) => URL + endpoint

export const get = (endpoint: Endpoint, config?: AxiosRequestConfig) =>
   axios.get(getEndpoint(endpoint), config)

export const post = (endpoint: Endpoint, data?: object, config?: AxiosRequestConfig) =>
   axios.post(getEndpoint(endpoint), data, config)
