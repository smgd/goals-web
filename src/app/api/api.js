import axiosBase from 'axios'


const TOKEN_NAME = process.env.TOKEN_NAME
const API_URL = process.env.API_URL

export const getAuthToken = () => localStorage.getItem(TOKEN_NAME)
export const hasAuthToken = () => !!getAuthToken()
export const setAuthToken = (token) => localStorage.setItem(TOKEN_NAME, token)
export const clearAuthToken = () => localStorage.removeItem(TOKEN_NAME)

const getAuthorizationHeader = () => {
  const accessToken = getAuthToken()
  return accessToken
    ? { Authorization: `Bearer ${accessToken}` }
    : {}
}

const getBackend = () => API_URL


const URL_API = getBackend()

export const apiBase = axiosBase.create({
  baseURL: URL_API,
  timeout: 60000 * 10,
  headers: {
    'Content-Type': 'application/json',
  },
})

const authenticatedRequest = (props) => apiBase({
  ...props,
  headers: {
    ...getAuthorizationHeader(),
    ...props.headers,
  },
})

export const api = (url) => ({
  get: (params) => authenticatedRequest({ method: 'GET', url, params }),
  post: (data) => authenticatedRequest({ method: 'POST', url, data }),
  patch: (data) => authenticatedRequest({ method: 'PATCH', url, data }),
  delete: () => authenticatedRequest({ method: 'DELETE', url }),
})
