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
import { Campaign } from './screens/campaign';
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
              to="/campaign"
            >
              Campaign
            </NavLink>
          </li>
        </ul>
        <Login />
      </nav>
      <Switch>
        <Route path="/campaign">
          <Campaign />
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
    // <AuthContext.Provider value={{ status, setStatus }}>
    <RoutedApp />
    // </AuthContext.Provider>
  );
};
