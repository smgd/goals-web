import React, {useContext, useState} from 'react';
import { WhiteCard, Container, Row } from '../common/Common.styles';
import Fonts from '../common/Fonts.styles';
import Button from "../common/Button";
import styled from 'styled-components';
import { LoginContext } from "./LoginContext";

const Header = styled(Fonts.H1)`
  margin-bottom: 10px;
`;

const Paragraph = styled(Fonts.Paragraph)`
  margin-bottom: 20px;
  color: #8B8B8B;
`;

const AuthPage = () => {
  const [ loginType, setLoginType ] = useState('none');
  return (
    <Container>
      <WhiteCard>
        <Header>Goals</Header>
        <Paragraph>Please login to continue</Paragraph>
        <Row>
          <Button
            title="Sign in"
            style="light"
            onClick={() => setLoginType('signIn')}
          />
          <Button
            title="Sign up"
            style="dark"
            onClick={() => setLoginType('signUp')}
          />
        </Row>
      </WhiteCard>
    </Container>
  )
}

export default AuthPage;