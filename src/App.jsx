import React from 'react';
import AuthRouter from './app/router';
import { LoginProvider } from './app/components/authentication/LoginContext';

const App = () => {
  return (
    <LoginProvider>
      <AuthRouter />
    </LoginProvider>
  );
};

export default App;
