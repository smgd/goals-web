import React, {useContext} from 'react';
import { clearAuthToken } from "../../api/api";
import history from "../../router/history";
import { LoginContext } from "../authentication/LoginContext";

const Dashboard = () => {
  const { user, setUser } = useContext(LoginContext);
  return (
    <div>
      hi, {user.username}!
      <button
        onClick={() => {
          clearAuthToken();
          setUser(() => ({
            username: null,
            isFetched: true,
          }));
          history.push('/');
        }}
      >
        log out
      </button>
    </div>

  )
};

export default Dashboard;
