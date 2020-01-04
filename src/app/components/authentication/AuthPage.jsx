import React from 'react';
import styled from 'styled-components';
import { WhiteCard, Container, Row } from '../common/Common.styles';
import Fonts from '../common/Fonts.styles';
import Button from '../common/Buttons/Button';
import history from '../../router/history';

const Header = styled(Fonts.H1)`
  margin-bottom: 10px;
`;

const Paragraph = styled(Fonts.Paragraph)`
  margin-bottom: 20px;
  color: #8B8B8B;
`;

const AuthPage = () => (
  <Container>
    <WhiteCard>
      <Header>Goals</Header>
      <Paragraph>Please authorize to continue</Paragraph>
      <Row>
        <Button
          title="Sign in"
          type="light"
          onClick={() => history.push('/login')}
        />
        <Button
          title="Sign up"
          type="dark"
          onClick={() => history.push('/register')}
        />
      </Row>
    </WhiteCard>
  </Container>
);

export default AuthPage;
