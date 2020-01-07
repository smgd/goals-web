import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import {WhiteCard, Container, Row, Link} from '../../common/Common.styles';
import { LoginContext } from '../LoginContext';
import Button from '../../common/Buttons/Button';
import Input from '../../common/Inputs/Input';
import history from '../../../router/history';
import Fonts from '../../common/Fonts.styles';
import { ModalContext } from '../../common/Modals/ModalContext';
import { loginUser } from '../api';
import { setAuthToken } from "../../../api/api";


const Paragraph = styled(Fonts.Paragraph)`
  margin-top: 20px;
  align-self: flex-end;
  padding-right: 20px;
`;

const Login = () => {
  const { user, setUser } = useContext(LoginContext);
  const { modal, setModal, Modals } = useContext(ModalContext);

  const [username, setUsername] = useState(user.username);
  const [password, setPassword] = useState(user.password);

  return (
    <Container>
      {modal || null}
      <WhiteCard>
        <Input
          styles="light"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          styles="light"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Row>
          <Button
            title="Cancel"
            type="light"
            onClick={() => history.push('/')}
          />
          <Button
            title="Sign in"
            type="dark"
            onClick={() => {
              loginUser(username, password)
                .catch(() => {
                  console.log('blabla');
                })
                .then((data) => {
                  const { token } = data;
                  setAuthToken(token);
                  setUser(prev => ({
                    ...prev,
                      username: username
                  }));
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
    </Container>
  );
};

export default Login;
