import { api } from '../../api/api';


export const fetchUser = () => api('whoami').get()
  .then((resp) => resp.data);

export const loginUser = (username, password) => api('login').post({
  username: username,
  password: password,
})
  .then((resp) => resp.data);

export const registerUser = (username, password, email, firstName, lastName) => api('register').post({
  username: username,
  password: password,
  email: email,
  first_name: firstName,
  last_name: lastName,
})
  .then((resp) => resp.data);