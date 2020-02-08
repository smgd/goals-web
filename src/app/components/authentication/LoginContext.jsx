import React, { createContext, useState, useEffect } from 'react'
import { fetchAndSetUser } from './api'

const LoginContext = createContext({})

const LoginProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: null,
    firstName: null,
    lastName: null,
    email: null,
    isFetched: false,
  })

  useEffect(() => fetchAndSetUser(setUser), [])

  return (
    <LoginContext.Provider value={{ user, setUser }}>
      {children}
    </LoginContext.Provider>
  )
}

export { LoginContext, LoginProvider }
