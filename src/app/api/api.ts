import axios, { type AxiosRequestConfig } from 'axios'

export const BASE_URL = process.env.REACT_APP_API

if (!BASE_URL) {
   throw new Error('[API] REACT_APP_API_URL is not set')
}

export type Endpoint = `/${string}`
export type Method = 'GET' | 'POST'

const getEndpoint = (endpoint: Endpoint) => BASE_URL + endpoint

/**
 * Performs a GET request with Axios to the specified endpoint. Can specify a
 * generic type to infer the type of the `response.data` to help. If not
 * specified, it will default to an object where the value type is set to
 * `unknown` to force the type to be set explicitly to safely assert that
 * the type is correct.
 *
 * @param endpoint
 * @param config
 */
export const get = <T = Record<string, unknown>>(
   endpoint: Endpoint,
   config?: AxiosRequestConfig
) => axios.get<T>(getEndpoint(endpoint), config)

/**
 * Performs a POST request with Axios to the specified endpoint. Can specify a
 * generic type to infer the type of the `response.data` to help. If not
 * specified, it will default to an object where the value type is set to
 * `unknown` to force the type to be set explicitly to safely assert that
 * the type is correct.
 *
 * @param endpoint
 * @param data
 * @param config
 */
export const post = <T = Record<string, unknown>>(
   endpoint: Endpoint,
   data?: object,
   config?: AxiosRequestConfig
) => axios.post<T>(getEndpoint(endpoint), data, config)
