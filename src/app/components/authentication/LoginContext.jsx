import React, {createContext, useState} from "react";


const LoginContext = createContext({});

const fetchUser = () => {
  // backend api for init user with localStorage token
  return {
    username: null,
    token: null,
  };
};

const LoginProvider = (props) => {
  const [ user, setUser ] = useState(fetchUser);

    return (
      <LoginContext.Provider value={{user, setUser }}>
        {props.children}
      </LoginContext.Provider>
    );
};

export { LoginContext, LoginProvider };