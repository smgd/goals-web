import { api } from '../../api/api'


export const fetchUser = () => api('whoami').get()
  .then((resp) => ({
    username: resp.data.username,
    firstName: resp.data.first_name,
    lastName: resp.data.last_name,
    email: resp.data.email,
  }))

export const fetchAndSetUser = (setter) => {
  setter((prev) => ({
    ...prev,
    isFetched: false,
  }))
  fetchUser()
    .then((resp) => {
      const {
        username, firstName, lastName, email,
      } = resp
      setter((prev) => ({
        ...prev,
        username,
        firstName,
        lastName,
        email,
        isFetched: true,
      }))
    })
    .catch(() => setter((prev) => ({
      ...prev,
      isFetched: true,
    })))
}

export const loginUser = (username, password) => api('login').post({
  username,
  password,
})
  .then((resp) => resp.data)

export const registerUser = (username, password, email, firstName, lastName) => api('register').post({
  username,
  password,
  email,
  first_name: firstName,
  last_name: lastName,
})
  .then((resp) => resp.data)
