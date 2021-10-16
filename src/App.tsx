import React from 'react';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import { Main, Wrapper } from './styled-component';

function App() {
  return (
    <HashRouter>
      <Wrapper>
        <Main>
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
        </Main>
        
        <Nav></Nav>
      </Wrapper>
    </HashRouter>
  );
}

export default App;

function Tags() {
  return <div>tags</div>
}

function Money() {
  return <div>Money</div>
}

function Statistics() {
  return <div>statistics</div>
}

function Nomatch() {
  return <div>404</div>
}