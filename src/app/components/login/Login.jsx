import React, { useState } from 'react';
import { WhiteCard, Container, Input, Button } from '../common/styles';

const Login = () => {
  const [ username, setUsername ] = useState(null);
  const [ password, setPassword ] = useState(null);

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
              onClick={() => console.log(username, password)}
            >
              log in
            </Button>
          </WhiteCard>
      </Container>
    )
}

export default Login;