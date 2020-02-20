import React from 'react'
import AuthRouter from './app/router'
import { LoginProvider } from './app/components/authentication/LoginContext'
import { ModalProvider } from './app/components/common/Modals/ModalContext'
import { Container } from './app/components/common/Common.styles'
import LocalizationProvider from './app/components/core/Internalization/LocalizationProvider'
import MergedContextProvider from './app/components/core/MergedContextProvider'


const PROVIDERS = [
  LocalizationProvider,
  LoginProvider,
  ModalProvider,
]

const App = () => (
  <MergedContextProvider contextProviders={PROVIDERS}>
    <Container>
      <AuthRouter />
    </Container>
  </MergedContextProvider>
)

export default App
