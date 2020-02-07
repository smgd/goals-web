import React, { useContext, useState } from 'react';
import { CenterBlockWrapper, Row, ValidationError, LeftButton, RightButton } from '../../common/Common.styles';
import { LoginContext } from '../LoginContext';
import Input from '../../common/Inputs/Input';
import history from '../../../router/history';
import { ModalContext } from '../../common/Modals/ModalContext';
import { fetchAndSetUser, loginUser } from '../api';
import { clearAuthToken, setAuthToken } from "../../../api/api";
import { injectIntl, FormattedMessage } from 'react-intl';
import { ButtonTheme } from '../../../model/Themes';

const Login = ({ intl }) => {
  const { user, setUser } = useContext(LoginContext);

  if (user.username) {//TODO: make hoc this case
    history.push('/dashboard');
  }

  const { modal, setModal, Modals } = useContext(ModalContext);

  const [username, setUsername] = useState(user.username);
  const [password, setPassword] = useState(user.password);
  const [validationErrorTextId, setValidationErrorTextId] = useState(null);

  return (
    <React.Fragment>
      {modal || null}
      <CenterBlockWrapper>
        <Input
          theme="light"
          type="text"
          placeholder={intl.formatMessage({ id: 'Login.username' })}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          theme="light"
          type="password"
          placeholder={intl.formatMessage({ id: 'Login.password' })}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {validationErrorTextId &&
          <ValidationError>
            <FormattedMessage id={validationErrorTextId} />
          </ValidationError>
        }
        <Row>
          <LeftButton
            onClick={() => {
              loginUser(username, password)
                .then((data) => {
                  setValidationErrorTextId(null);
                  const { token } = data;
                  setAuthToken(token);
                  fetchAndSetUser(setUser);

                  history.push('/dashboard');
                })
                .catch(() => {
                  clearAuthToken();//WTF?
                  setValidationErrorTextId('Login.error')
                })
            }}
          >
            <FormattedMessage id="Login.signIn" />
          </LeftButton>
          <RightButton
            theme={ButtonTheme.DARK}
            onClick={() => history.push('/')}
          >
            <FormattedMessage id="Login.cancel" />
          </RightButton>
        </Row>
      </CenterBlockWrapper>
    </React.Fragment>
  );
};

const LoginWithIntl = injectIntl(Login)

export default Login;
