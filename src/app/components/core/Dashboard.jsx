import React, { useContext } from 'react';
import { clearAuthToken } from '../../api/api';
import history from '../../router/history';
import { LoginContext } from '../authentication/LoginContext';
import { CenterBlockWrapper, LeftButton, RightButton, Row } from '../common/Common.styles';
import { ButtonTheme } from '../../model/Themes';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import { siteMap } from '../siteMap';

const Dashboard = () => {
  const { user, setUser } = useContext(LoginContext);
  return (
    <CenterBlockWrapper>
      <FormattedMessage
        tagName="h2"
        id="Dashboard.greeting.title"
        values={{ username: user.username }}
      />
      <FormattedHTMLMessage
        tagName="p"
        id="Dashboard.userInfo"
        values={user}
      />
      <Row>
        <LeftButton
          onClick={() => {
            history.push(siteMap.USER.areas());
          }}
        >
          <FormattedMessage id="Dashboard.btn.openAreas" />
        </LeftButton>
        <RightButton
          theme={ButtonTheme.DARK}
          onClick={() => {
            clearAuthToken();
            setUser(() => ({
              username: null,
              isFetched: true,
            }));
            history.push(siteMap.GUEST.index());
          }}
        >
          <FormattedMessage id="Dashboard.btn.logOut" />
        </RightButton>
      </Row>
    </CenterBlockWrapper>
  );
};

export default Dashboard;
