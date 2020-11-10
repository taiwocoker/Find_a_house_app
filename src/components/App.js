import React from 'react';
import LandingPage from '../Pages/LandingPage';
import { Route, Switch, useHistory } from 'react-router-dom'
import Error from '../Pages/ErrorPage'
import Auth from '../Auth/auth'
import Navbar from '../components/Navbar'
import HouseList from '../containers/HouseList'

function App() {
  const history = useHistory()
  const auth = new Auth(history)
  return (
    <>
      <Navbar auth={auth} />
      <Switch>
        <Route path='/' exact render={() => <LandingPage auth={auth} />} />
        <Route
          path='/House-list'
          // eslint-disable-next-line no-confusing-arrow
          render={() =>
            auth.isAuthenticated() ? <HouseList auth={auth} /> : auth.login()
          }
        />
        <Route component={Error} />
      </Switch>
    </>
  )

}
export default App

