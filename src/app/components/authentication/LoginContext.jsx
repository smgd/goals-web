import React, { createContext, useState, useEffect } from 'react';
import { fetchUser } from './api';


const LoginContext = createContext({});

const LoginProvider = (props) => {
  const [ user, setUser ] = useState({
    username: null,
    token: null,
    isFetched: false,
  });

  useEffect(() => {
    fetchUser()
      .then(resp => {
        const { username } = resp;
        setUser(prev => ({
          ...prev,
          username: username,
          isFetched: true,
        }))
      })
      .catch(() => setUser(prev => ({
        ...prev,
        isFetched: true,
      })))
  }, []);

  return (
    <LoginContext.Provider value={{ user, setUser }}>
      {props.children}
    </LoginContext.Provider>
  );
};

export { LoginContext, LoginProvider };
