import React, { useContext, useState } from 'react'
import { FormattedMessage } from 'react-intl'
import {
  CenterBlockWrapper, Row, ValidationError, LeftButton, RightButton,
} from '../../common/Common.styles'
import { LoginContext } from '../LoginContext'
import Input from '../../common/Inputs/Input'
import history from '../../../router/history'
import { ModalContext } from '../../common/Modals/ModalContext'
import { fetchAndSetUser, loginUser } from '../api'
import { clearAuthToken, setAuthToken } from '../../../api/api'
import { ButtonTheme } from '../../../model/Themes'
import { siteMap } from '../../siteMap'

const Login = () => {
  const { user, setUser } = useContext(LoginContext)

  if (user.username) { //TODO: make hoc this case
    history.push(siteMap.USER.dashboard())
  }

  const { modal } = useContext(ModalContext)

  const [username, setUsername] = useState(user.username)
  const [password, setPassword] = useState(user.password)
  const [validationErrorTextId, setValidationErrorTextId] = useState(null)

  return (
    <>
      {modal || null}
      <CenterBlockWrapper>
        <Input
          placeholderId="Login.username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholderId="Login.password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {validationErrorTextId
          && (
          <ValidationError>
            <FormattedMessage id={validationErrorTextId} />
          </ValidationError>
          )}
        <Row>
          <LeftButton
            onClick={() => {
              loginUser(username, password)
                .then((data) => {
                  setValidationErrorTextId(null)
                  const { token } = data
                  setAuthToken(token)
                  fetchAndSetUser(setUser)

                  history.push(siteMap.USER.dashboard())
                })
                .catch(() => {
                  clearAuthToken()//WTF?
                  setValidationErrorTextId('Login.error')
                })
            }}
          >
            <FormattedMessage id="Login.signIn" />
          </LeftButton>
          <RightButton
            theme={ButtonTheme.DARK}
            onClick={() => history.push(siteMap.GUEST.index())}
          >
            <FormattedMessage id="Login.cancel" />
          </RightButton>
        </Row>
      </CenterBlockWrapper>
    </>
  )
}

export default Login
