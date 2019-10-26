import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import routes from 'configs/routes';

const App = () => {
  return (
    <Router>
      <Switch>
        {routes.map(item => (
          <Route exact={item.exact} path={item.path} key={item.path}>
            {item.component()}
          </Route>
        ))}
      </Switch>
    </Router>
  );
};

export default App;
