import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import Signup from './components/Signup'

const App = () => {
  return (
    <>
{/* <Router> */}
      <Navbar />
      
        {/* <Switch> */}

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/signup">
            <Signup />
          </Route>
        {/* </Switch> */}
      {/* </Router> */}
    </>
  )
}

export default App