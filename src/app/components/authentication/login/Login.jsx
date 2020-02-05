import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { WhiteCard, Row, Link, ValidationError } from '../../common/Common.styles';
import { LoginContext } from '../LoginContext';
import Button from '../../common/Buttons/Button';
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
      <WhiteCard>
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
          <Button
            title="Cancel"
            type="dark"
            onClick={() => history.push('/')}
          />
          <Button
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
        </Row>
        <Paragraph>
          Forgot password?
          {' '}
          <Link onClick={() => setModal(Modals.ResetPasswordModal)}>
            Reset via email
          </Link>
        </Paragraph>
      </WhiteCard>
    </React.Fragment>
  );
};

export default Login;
