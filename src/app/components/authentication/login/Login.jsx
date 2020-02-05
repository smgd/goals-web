import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { CenterBlockWrapper, Row, Link, ValidationError, LeftButton, RightButton } from '../../common/Common.styles';
import { LoginContext } from '../LoginContext';
import Input from '../../common/Inputs/Input';
import history from '../../../router/history';
import Fonts from '../../common/Fonts.styles';
import { ModalContext } from '../../common/Modals/ModalContext';
import { fetchAndSetUser, loginUser } from '../api';
import { clearAuthToken, setAuthToken } from "../../../api/api";


const Paragraph = styled(Fonts.Paragraph)`
  margin-top: 20px;
  align-self: flex-end;
  padding-right: 20px;
`;

const Login = () => {
  const { user, setUser } = useContext(LoginContext);

  if (user.username) {
    history.push('/dashboard');
  }

  const { modal, setModal, Modals } = useContext(ModalContext);

  const [username, setUsername] = useState(user.username);
  const [password, setPassword] = useState(user.password);
  const [validationErrorText, setValidationErrorText] = useState(null);

  return (
    <React.Fragment>
      {modal || null}
      <CenterBlockWrapper>
        <Input
          theme="light"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          theme="light"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {validationErrorText &&
          <ValidationError>
            {validationErrorText}
          </ValidationError>
        }
        <Row>
          <LeftButton
            title="Sign in"
            type="light"
            onClick={() => {
              loginUser(username, password)
                .then((data) => {
                  setValidationErrorText(null);
                  const { token } = data;
                  setAuthToken(token);
                  fetchAndSetUser(setUser);

                  history.push('/dashboard');
                })
                .catch(() => {
                  clearAuthToken();
                  setValidationErrorText('Incorrect username or password')
                })
            }}
          />
          <RightButton
            title="Cancel"
            type="dark"
            onClick={() => history.push('/')}
          />

        </Row>
        {/*<Paragraph>*/}
        {/*  Forgot password?*/}
        {/*  {' '}*/}
        {/*  <Link onClick={() => setModal(Modals.ResetPasswordModal)}>*/}
        {/*    Reset via email*/}
        {/*  </Link>*/}
        {/*</Paragraph>*/}
      </CenterBlockWrapper>
    </React.Fragment>
  );
};

export default Login;
