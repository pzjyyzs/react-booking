import React from 'react';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import Money from 'views/money';
import Nomatch from 'views/no-match';
import Statistics from 'views/statistics';
import Tags from 'views/tags';

function App() {
  return (
    <HashRouter>
          <Switch>
            <Route path="/tags">
              <Tags></Tags>
            </Route>
            <Route path="/money">
              <Money></Money>
            </Route>
            <Route path="/statistics">
              <Statistics></Statistics>
            </Route>

            <Redirect exact from='/' to='/money' />
            <Route path='*'>
              <Nomatch></Nomatch>
            </Route>
          </Switch>
    </HashRouter>
  );
}

export default App;