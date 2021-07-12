import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './components/pages/About'
import Home from './components/pages/Home'
import Navbar from './components/layout/Navbar'

import ContactState from './context/contact/ContactState'
import './App.css'

function App() {
  return (
    <ContactState>
      <Router>
        <>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
            </Switch>
          </div>
        </>
      </Router>
    </ContactState>
  )
}

export default App
