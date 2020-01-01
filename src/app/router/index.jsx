import React, { useContext } from 'react';
import { Route, Switch, Router, Redirect } from 'react-router-dom';
import history from './history';
import Login from '../components/authentication/login/Login';
import Register from '../components/authentication/register/Register';
import Dashboard from '../components/dashboard/Dashboard';
import AuthPage from "../components/authentication/authPage";
import {LoginContext} from "../components/authentication/LoginContext";


const PrivateRoute = ({ user, component: Component, ...rest }) => {
  const { username, token } = user;
  if (!username && !token) {
    return <Redirect to="/" />
  } 
  return (
  <Route
    {...rest}
    render={(props) => {
      return <Component {...props} user={user} />;
    }}
  />
  )
};

const AuthRouter = () => {
  const { user } = useContext(LoginContext);
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />

        <PrivateRoute
          path="/dashboard"
          component={Dashboard}
          user={user}
        />

        <Route path="/" component={AuthPage} />
      </Switch>
    </Router>
  );
};

export default AuthRouter;