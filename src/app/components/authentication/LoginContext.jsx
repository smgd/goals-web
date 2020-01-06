import React, { createContext, useState, useEffect } from 'react';
import { fetchUser } from './api';


const LoginContext = createContext({});

const LoginProvider = (props) => {
  const [ user, setUser ] = useState({
    username: null,
    token: null,
  });
  const [ isUserLoading, setIsUserLoading] = useState(true);

  useEffect(() => {
    Promise.resolve(
      fetchUser()
        .then(resp => setUser(prev => ({
          ...prev,
          username: resp.username
        }))))
        .finally(() => setIsUserLoading(false))
  }, []);

  return (
    <LoginContext.Provider value={{ user, setUser, isLoading: isUserLoading }}>
      {props.children}
    </LoginContext.Provider>
  );
};

export { LoginContext, LoginProvider };
