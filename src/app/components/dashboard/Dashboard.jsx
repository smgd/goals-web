import React, {useContext} from 'react';
import { clearAuthToken } from "../../api/api";
import history from "../../router/history";
import { LoginContext } from "../authentication/LoginContext";
import { WhiteCard } from "../common/Common.styles";
import Button from "../common/Buttons/Button";

const Dashboard = () => {
  const { user, setUser } = useContext(LoginContext);
  return (
    <React.Fragment>
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
    </React.Fragment>
  )
};

export default Dashboard;
