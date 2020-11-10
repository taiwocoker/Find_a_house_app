import React from 'react';
import LandingPage from '../Pages/LandingPage';
import { Route, Switch, useHistory } from 'react-router-dom'
import Error from '../Pages/ErrorPage'
import Auth from '../Auth/auth'

function App() {
  const history = useHistory()
  const auth = new Auth(history)
  return (
    <>
      <Switch>
        <Route path='/' exact render={() => <LandingPage auth={auth} />} />
        <Route component={Error} />
      </Switch>
    </>
  )
}
export default App

