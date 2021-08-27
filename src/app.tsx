import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Campaign } from './screens/campaign';
import { Home } from './screens/home';

const RoutedApp = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/campaign">Campaign</Link>
          </li>
        </ul>
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
  return <RoutedApp />;
};
