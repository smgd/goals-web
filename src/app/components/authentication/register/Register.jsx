import React, {useContext, useState} from 'react';
import { WhiteCard, Container, Row } from '../../common/Common.styles';
import { ValidationError } from './Register.styles';
import Button from '../../common/Buttons/Button';
import Input from '../../common/Inputs/Input';
import history from '../../../router/history';
import { registerUser } from "../api";
import { setAuthToken } from "../../../api/api";
import { LoginContext } from "../LoginContext";

const Register = () => {
  const { user, setUser } = useContext(LoginContext);
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordAgain, setPasswordAgain] = useState(null);
  const [validationErrorText, setValidationErrorText] = useState(null);

  if (user.username) {
    history.push('/dashboard');
  }

  const register = () => {
    if (password !== passwordAgain) {
      setValidationErrorText('Passwords should match!!');
      return;
    }

    setValidationErrorText(null);
    registerUser(username, password, email)
      .then((data) => {
        const { token } = data;
        setAuthToken(token);
        setUser(prev => ({
          ...prev,
          username: username
        }));

        history.push('/dashboard');
      })
      .catch(() => console.log('blabla'))
  };

  return (
    <Container>
      <WhiteCard>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          value={passwordAgain}
          onChange={(e) => setPasswordAgain(e.target.value)}
        />
        {validationErrorText
              && (
              <ValidationError>
                {validationErrorText}
              </ValidationError>
              )}
        <Row>
          <Button
            title="Cancel"
            type="light"
            onClick={() => history.push('/')}
          />
          <Button
            title="Sign up"
            type="dark"
            onClick={register}
          />
        </Row>
      </WhiteCard>
    </Container>
  );
};

export default Register;
