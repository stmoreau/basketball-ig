import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Info from './Info';

const Main = () => (
  <div className="container">
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/info' component={Info}/>
    </Switch>
  </div>
);

export default Main;
