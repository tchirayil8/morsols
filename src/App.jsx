import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Homepage } from './containers/Homepage';
import { Navbar } from './components/layout/Navbar';

export const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </>
  );
}
