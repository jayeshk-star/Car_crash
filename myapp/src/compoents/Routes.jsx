import React from 'react'
import Navbar from './Navbar'
import { Switch, Route } from 'react-router'
import Contact from './Contact'
import Home from './Home'
import About from './About'
import Signup from './Signup'
import Singledata from './Singledata'

const Routes = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/:id'>
          <Singledata />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>
        <Route exact path='/about'>
          <About />{' '}
        </Route>

        <Route exact path='/login'>
          <Signup />{' '}
        </Route>
        <Route>Opps! page is not not found 404</Route>
      </Switch>
    </div>
  )
}

export default Routes
