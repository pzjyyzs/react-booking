import React from 'react';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import Money from 'views/money';
import Nomatch from 'views/no-match';
import Statistics from 'views/statistics';
import Tag from 'views/tag';
import Tags from 'views/tags';

function App() {
  return (
    <HashRouter>
          <Switch>
            <Route exact path="/tags/:id">
              <Tag />
            </Route>
            <Route exact path="/tags">
              <Tags></Tags>
            </Route>
            <Route exact path="/money">
              <Money></Money>
            </Route>
            <Route exact path="/statistics">
              <Statistics></Statistics>
            </Route>

            <Redirect exact from='/' to='/tags' />
            <Route path='*'>
              <Nomatch></Nomatch>
            </Route>
          </Switch>
    </HashRouter>
  );
}

export default App;