import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Forms/Login'
import LoginForm from './Components/Forms/LoginForm'

export default (
    <Switch>
        <Route exact path='/' component={Home} />
    <Route path='/login' component={() => (
      <Login>
        <LoginForm />
      </Login>
    )} />
    </Switch>
)