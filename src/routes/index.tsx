import React from 'react'
import { Switch } from 'react-router-dom'

import Route from './Route'

import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Dashboard from '../pages/Dashboard'

const routes: React.FC = () => {
  return (
    <Switch>
      <Route path='/' exact component={SignIn} />
      <Route path='/signup' component={SignUp} />
      <Route path='/dashboard' isPrivate exact component={Dashboard} />
    </Switch>
  )
}

export default routes
