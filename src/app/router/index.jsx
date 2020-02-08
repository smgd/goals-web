import React, { useContext } from 'react'
import {
  Route, Switch, Router, Redirect,
} from 'react-router-dom'
import history from './history'
import Login from '../components/authentication/login/Login'
import Register from '../components/authentication/register/Register'
import Dashboard from '../components/core/Dashboard'
import AuthPage from '../components/authentication/AuthPage'
import { LoginContext } from '../components/authentication/LoginContext'
import { Loader } from '../components/common/Common.styles'
import AreasContainer from '../components/core/Areas/Areas.container'
import Page404 from '../components/Page404'
import AreaComponent from '../components/core/Areas/Area.component'
import { siteMap } from '../components/siteMap'


const PrivateRoute = ({ user, component: Component, ...rest }) => {
  const { username } = user
  if (!username) {
    return <Redirect to="/" />
  }
  return (
    <Route
      {...rest}
      render={(props) => <Component {...props} user={user} />}
    />
  )
}

const AuthRouter = () => {
  const { user } = useContext(LoginContext)

  if (!user.isFetched) return <Loader />

  return (
    <Router history={history}>
      <Switch>
        <Route path={siteMap.GUEST.login()} component={Login} />
        <Route path={siteMap.GUEST.register()} component={Register} />

        <PrivateRoute
          path={siteMap.USER.dashboard()}
          component={Dashboard}
          user={user}
        />
        <PrivateRoute
          path={siteMap.USER.createArea()}
          component={AreaComponent}
          user={user}
        />
        <PrivateRoute
          path={siteMap.USER.areas()}
          exact
          component={AreasContainer}
          user={user}
        />

        <Route path={siteMap.GUEST.index()} exact component={AuthPage} />
        <PrivateRoute component={Page404} user={user} />
      </Switch>
    </Router>
  )
}

export default AuthRouter
