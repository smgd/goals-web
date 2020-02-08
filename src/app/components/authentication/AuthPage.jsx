import React, { useContext } from 'react';
import styled from 'styled-components';
import { CenterBlockWrapper, Container, Row } from '../common/Common.styles';
import Fonts from '../common/Fonts.styles';
import { LeftButton, RightButton } from '../common/Common.styles';
import history from '../../router/history';
import { LoginContext } from "./LoginContext";
import logo from '../../../assets/images/caribou.png';
import { ButtonTheme } from '../../model/Themes';
import { FormattedMessage } from 'react-intl';
import { siteMap } from '../siteMap';

const Header = styled(Fonts.H1)`
  margin-bottom: 10px;
`;

const Logo = styled('img')`
  width: 100px;
  height: 100px;
  filter: brightness(0);
`;

const Paragraph = styled(Fonts.Paragraph)`
  margin-bottom: 20px;
  color: #8B8B8B;
`;

const AuthPage = () => {
  const { user } = useContext(LoginContext);

  if (user.username) {
    history.push(siteMap.USER.dashboard());
  }

  return (
    <Container>
      <CenterBlockWrapper>
        <Logo
          src={logo}
        />
        <Header>
          <FormattedMessage id="AuthPage.title" />
        </Header>
        <Paragraph>
          <FormattedMessage id="AuthPage.description" />
        </Paragraph>
        <Row>
          <LeftButton
            onClick={() => history.push(siteMap.GUEST.login())}
          >
            <FormattedMessage id="AuthPage.signIn" />
          </LeftButton>
          <RightButton
            theme={ButtonTheme.DARK}
            onClick={() => history.push(siteMap.GUEST.register())}
          >
            <FormattedMessage id="AuthPage.signUp" />
          </RightButton>
        </Row>
      </CenterBlockWrapper>
    </Container>
  );
};

export default AuthPage;
