import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import HomePage from './HomePage';
import LC7 from './LC7'

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path='/LC7'><LC7 /></Route>
        <Route path='/'><HomePage /></Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
