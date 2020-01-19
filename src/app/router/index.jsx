import React, { useContext } from 'react';
import {
  Route, Switch, Router, Redirect,
} from 'react-router-dom';
import history from './history';
import Login from '../components/authentication/login/Login';
import Register from '../components/authentication/register/Register';
import Dashboard from '../components/dashboard/Dashboard';
import AuthPage from '../components/authentication/AuthPage';
import { LoginContext } from '../components/authentication/LoginContext';
import { Loader } from '../components/common/Common.styles';
import GoalsList from '../components/dashboard/GoalsList';
import Page404 from "../components/Page404";


const PrivateRoute = ({ user, component: Component, ...rest }) => {
  const { username } = user;
  if (!username) {
    return <Redirect to="/" />;
  }
  return (
    <Route
      {...rest}
      render={(props) => <Component {...props} user={user} />}
    />
  );
};

const AuthRouter = () => {
  const { user } = useContext(LoginContext);
  return (!user.isFetched ? <Loader />
    : (
      <Router history={history}>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          {/* test route */}
          <Route path="/test-list" exact component={GoalsList} />
          {/* test route */}

          <PrivateRoute
            path="/dashboard"
            exact
            component={Dashboard}
            user={user}
          />

          <Route path="/" exact component={AuthPage} />
          <Route component={Page404} />
        </Switch>
      </Router>
    )
  );
};

export default AuthRouter;
