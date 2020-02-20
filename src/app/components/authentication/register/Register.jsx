import React, { useContext, useState } from 'react'
import { FormattedMessage } from 'react-intl'
import {
  CenterBlockWrapper, LeftButton, RightButton, Row, ValidationError,
} from '../../common/Common.styles'
import Input from '../../common/Inputs/Input'
import history from '../../../router/history'
import { fetchAndSetUser, registerUser } from '../api'
import { setAuthToken } from '../../../api/api'
import { LoginContext } from '../LoginContext'
import { ButtonTheme } from '../../../model/Themes'
import { siteMap } from '../../siteMap'

const Register = () => {
  const { user, setUser } = useContext(LoginContext)
  const [username, setUsername] = useState(null)
  const [firstName, setFirstName] = useState(null)
  const [lastName, setLastName] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [passwordAgain, setPasswordAgain] = useState(null)
  const [validationErrorTextId, setValidationErrorTextId] = useState(null)

  if (user.username) {
    history.push(siteMap.USER.dashboard())
  }

  const onRegisterButtonClick = () => {
    if (!firstName || !lastName || !email || !username) {
      setValidationErrorTextId('Register.error.allRequired')
      return
    }

    if (password !== passwordAgain) {
      setValidationErrorTextId('Register.error.passwordsNotMatch')
      return
    }

    setValidationErrorTextId(null)
    registerUser(username, password, email, firstName, lastName)
      .then((data) => {
        const { token } = data
        setAuthToken(token)
        fetchAndSetUser(setUser)
        history.push(siteMap.USER.dashboard())
      })
      .catch(() => console.log('blabla'))
  }

  return (
    <CenterBlockWrapper>
      <Input
        type="email"
        placeholderId="Register.field.email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholderId="Register.field.username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        placeholderId="Register.field.firstName"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <Input
        placeholderId="Register.field.lastName"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <Input
        type="password"
        placeholderId="Register.field.password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        type="password"
        placeholderId="Register.field.passwordConfirmation"
        value={passwordAgain}
        onChange={(e) => setPasswordAgain(e.target.value)}
      />
      {validationErrorTextId
        && (
        <ValidationError>
          <FormattedMessage id={validationErrorTextId} />
        </ValidationError>
        )}
      <Row>
        <LeftButton
          title="Sign up"
          onClick={onRegisterButtonClick}
        >
          <FormattedMessage id="Register.btn.signUp" />
        </LeftButton>
        <RightButton
          title="Cancel"
          theme={ButtonTheme.DARK}
          onClick={() => history.push(siteMap.GUEST.index())}
        >
          <FormattedMessage id="Register.btn.cancel" />
        </RightButton>
      </Row>
    </CenterBlockWrapper>
  )
}

export default Register
