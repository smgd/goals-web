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
import AreasContainer from "../components/dashboard/Areas/Areas.container";
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
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />

          <PrivateRoute
            path="/dashboard"
            component={Dashboard}
            user={user}
          />
          <PrivateRoute
            path="/areas"
            component={AreasContainer}
            user={user}
          />

          <Route path="/" exact component={AuthPage} />
          <PrivateRoute component={Page404} user={user} />
        </Switch>
      </Router>
    )
  );
};

export default AuthRouter;
