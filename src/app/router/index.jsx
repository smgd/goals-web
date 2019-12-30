import React, { useState, useEffect } from 'react';
import { Route, Switch, Router, Redirect } from 'react-router-dom';
import history from './history';
import Login from '../components/login/Login';
import Register from '../components/register/Register';
import Dashboard from '../components/dashboard/Dashboard';


const PrivateRoute = ({ user, component: Component, ...rest }) => {
  if (!user) {
    return <Redirect to="/login" />
  } 
  return (
  <Route
    {...rest}
    render={(props) => {
      return <Component {...props} user={user} />;
    }}
  />
  )
}

const AuthRouter = (props) => {
    const [user, setUser] = useState('vlalva')

    useEffect(() => {
      setUser('soapman');
    }, [])
    console.log(user);
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
        </Switch>
      </Router>
    );
}

export default AuthRouter;