import React, { useContext, useState } from 'react';
import { CenterBlockWrapper, Row, ValidationError } from '../../common/Common.styles';
import Button from '../../common/Buttons/Button';
import Input from '../../common/Inputs/Input';
import history from '../../../router/history';
import { fetchAndSetUser, registerUser } from "../api";
import { setAuthToken } from "../../../api/api";
import { LoginContext } from "../LoginContext";

const Register = () => {
  const { user, setUser } = useContext(LoginContext);
  const [username, setUsername] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordAgain, setPasswordAgain] = useState(null);
  const [validationErrorText, setValidationErrorText] = useState(null);

  if (user.username) {
    history.push('/dashboard');
  }

  const register = () => {
    if (!firstName || !lastName || !email || !username) {
      setValidationErrorText('Fill all required fields please!');
      return;
    }

    if (password !== passwordAgain) {
      setValidationErrorText('Passwords should match!!');
      return;
    }

    setValidationErrorText(null);
    registerUser(username, password, email, firstName, lastName)
      .then((data) => {
        const { token } = data;
        setAuthToken(token);
        fetchAndSetUser(setUser);
        history.push('/dashboard');
      })
      .catch(() => console.log('blabla'))
  };

  return (
    <CenterBlockWrapper>
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
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
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
          title="Sign up"
          type="light"
          onClick={register}
        />
      </Row>
    </CenterBlockWrapper>
  );
};

export default Register;
