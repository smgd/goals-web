import { api } from '../../api/api';


export const fetchUser = () => api('whoami').get()
  .then((resp) => resp.data);

export const loginUser = (username, password) => api('login').post({
  username: username,
  password: password,
})
  .then((resp) => resp.data);

export const registerUser = (username, password, email) => api('register').post({
  username: username,
  password: password,
  email: email,
})
  .then((resp) => resp.data);