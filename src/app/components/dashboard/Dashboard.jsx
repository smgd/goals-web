import React, {useContext} from 'react';
import { clearAuthToken } from "../../api/api";
import history from "../../router/history";
import { LoginContext } from "../authentication/LoginContext";
import { Container, WhiteCard } from "../common/Common.styles";
import Button from "../common/Buttons/Button";

const Dashboard = () => {
  const { user, setUser } = useContext(LoginContext);
  return (
    <Container>
      <WhiteCard>
        <h2>Hi, {user.username}!</h2>
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
      </WhiteCard>
    </Container>
  )
};

export default Dashboard;
