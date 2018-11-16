import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Availability from './Availability'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/availability' component={Availability}/>
    </Switch>
  </main>
)

export default Main
