import React from 'react';
import AuthRouter from './app/router';
import { LoginProvider } from './app/components/authentication/LoginContext';
import { ModalProvider } from './app/components/common/Modals/ModalContext';
import { Container } from "./app/components/common/Common.styles";

const App = () => (
  <LoginProvider>
    <ModalProvider>
      <Container>
        <AuthRouter />
      </Container>
    </ModalProvider>
  </LoginProvider>
);

export default App;
