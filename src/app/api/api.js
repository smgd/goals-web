import { default as axiosBase } from 'axios';


const getBackend = () => {
  return 'http://localhost:8000/api/'
}

const URL_API = getBackend();

export const apiBase = axiosBase.create({
  baseURL: URL_API,
  timeout: 60000 * 10,
  headers: {
    'Content-Type': 'application/json',
  },
});

const authenticatedRequest = (props) => apiBase({
  ...props,
  headers: {
    'Authorization': getAuthToken(),
    ...props.headers,
  },
});

export const api = (url) => ({
  get: (params) => authenticatedRequest({ method: 'GET', url, params }),
  post: (data) => authenticatedRequest({ method: 'POST', url, data }),
});

const TOKEN_NAME = 'tokenpoken';

export const getAuthToken = () => localStorage.getItem(TOKEN_NAME)
export const hasAuthToken = () => !!getAuthToken();
export const setAuthToken = token => localStorage.setItem(TOKEN_NAME, token);
export const clearAuthToken = () => localStorage.removeItem(TOKEN_NAME);
