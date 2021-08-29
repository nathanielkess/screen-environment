import React, { FC, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import { Login } from './components/login';
import { Authentication } from './models/authentication';
import { AuthContext } from './providers/auth/auth.context';
import { Campaign1 } from './screens/campaign-1';
import { Campaign2 } from './screens/campaign-2';
import { Home } from './screens/home';

const RoutedApp = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <NavLink exact activeStyle={{ textDecoration: 'underline' }} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              activeStyle={{ textDecoration: 'underline' }}
              to="/campaign-1"
            >
              Campaign 1
            </NavLink>
          </li>
          <li>
            <NavLink
              activeStyle={{ textDecoration: 'underline' }}
              to="/campaign-2"
            >
              Campaign 1
            </NavLink>
          </li>
        </ul>
        <Login />
      </nav>
      <Switch>
        <Route path="/campaign-1">
          <Campaign1 />
        </Route>
        <Route path="/campaign-2">
          <Campaign2 />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export const App: FC = () => {
  const [status, setStatus] = useState<Authentication>(
    Authentication.UNATHENTICATED
  );

  return (
    <AuthContext.Provider value={{ status, setStatus }}>
      <RoutedApp />
    </AuthContext.Provider>
  );
};
