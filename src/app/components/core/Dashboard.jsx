import React, { useContext } from 'react';
import { clearAuthToken } from '../../api/api';
import history from '../../router/history';
import { LoginContext } from '../authentication/LoginContext';
import { CenterBlockWrapper } from '../common/Common.styles';
import Button from '../common/Buttons/Button';

const Dashboard = () => {
  const { user, setUser } = useContext(LoginContext);
  return (
    <React.Fragment>
      <CenterBlockWrapper>
        <h2>Hi, {user.username}!</h2>
        <p>
          Your name: {user.firstName} {user.lastName}
          <br />
          <br />
          Your email: {user.email}
        </p>
        <Button
          title="Open Your Areas"
          type="light"
          onClick={() => {
            history.push('/areas');
          }}
        />
        <Button
          title="Log Out"
          type="dark"
          onClick={() => {
            clearAuthToken();
            setUser(() => ({
              username: null,
              isFetched: true,
            }));
            history.push('/');
          }}
        />
      </CenterBlockWrapper>
    </React.Fragment>
  );
};

export default Dashboard;
