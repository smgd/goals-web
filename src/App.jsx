import React from 'react';
import AuthRouter from './app/router';
import { LoginProvider } from './app/components/authentication/LoginContext';
import { ModalProvider } from './app/components/common/Modals/ModalContext';

const App = () => (
  <LoginProvider>
    <ModalProvider>
      <AuthRouter />
    </ModalProvider>
  </LoginProvider>
);

export default App;
