import React, { useState } from 'react';
import { WhiteCard, Container, Input } from '../../common/Common.styles';
import { ValidationError } from './Register.styles';
import Button from "../../common/Button";


const Register = () => {
  const [ username, setUsername ] = useState(null);
  const [ email, setEmail ] = useState(null);
  const [ password, setPassword ] = useState(null);
  const [ passwordAgain, setPasswordAgain ] = useState(null);
  const [ validationErrorText, setValidationErrorText ] = useState(null);

  const register = () => {
    if (password !== passwordAgain) {
      setValidationErrorText('Passwords should match!!');
      return;
    }

    setValidationErrorText(null);
    console.log('blabla');
  };

    return (
      <Container>
          <WhiteCard>
            <Input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              type="password"
              placeholder="password again"
              value={passwordAgain}
              onChange={(e) => setPasswordAgain(e.target.value)}
            />
            {validationErrorText &&
              <ValidationError>
                {validationErrorText}
              </ValidationError>
            }
            <Button
              title="Sign up"
              type="dark"
              onClick={register}
            />
          </WhiteCard>
      </Container>
    )
};

export default Register;
