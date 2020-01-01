import React, {useContext, useState} from 'react';
import { WhiteCard, Container, Input, Button } from '../../common/Common.styles';
import {LoginContext} from "../LoginContext";

const Login = () => {
  const { user, setUser } = useContext(LoginContext);

  const [ username, setUsername ] = useState(user.username);
  const [ password, setPassword ] = useState(user.password);

  return (
    <Container>
      <WhiteCard>
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
        <Button
          onClick={() => {
            // backend api for login with username and password
            // place token in localStorage
            // after 200 place in setUser username and token
            console.log(user);
          }}
        >
          log in
        </Button>
      </WhiteCard>
    </Container>
  )
};

export default Login;