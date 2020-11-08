import React from 'react';
import logo from './logo.svg';
import { Route, Switch } from 'react-router-dom';
import { Homepage } from './containers/Homepage';
import { Navbar } from './components/layout/Navbar';

export const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/morsols" component={Homepage} />
      </Switch>
    </>
  );
}
