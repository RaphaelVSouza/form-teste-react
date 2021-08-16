import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import RegisterStep1 from 'pages/RegisterStep1';
import RegisterStep2 from 'pages/RegisterStep2';

function Routes() {
  return (

    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/registro/passo-1" />
        </Route>
        <Route exact path="/registro/passo-1" component={RegisterStep1} />
        <Route exact path="/registro/passo-2" component={RegisterStep2} />
      </Switch>
    </Router>

  )
}

export default Routes;
