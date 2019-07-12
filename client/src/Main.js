import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Home from './Home'
import News from './News'
import Links from './Links'
import JazzFinder from './JazzFinder'
import Contact from './Contact'
import Admin from './Admin';

const Main = ({ vip}) => {
  console.log("Entered Main function")
  return (
    <div>
      <Router>
        <div id="main">
          <div id="navbar">
            <ul className="header">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/news">News</Link></li>
              <li><Link to="/links">Links</Link></li>
              <li><Link to="/jazzfinder">JazzFinder</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              {vip === true && <li><Link to="/admin">Admin</Link></li>}
            </ul>
          </div>
          <Route exact path="/" component={Home} />
          <Route path="/news" component={News} />
          <Route path="/links" component={Links} />
          <Route path="/jazzfinder" component={JazzFinder} />
          <Route path="/contact" component={Contact} />
          {vip === true && <Route path="/admin" component={Admin} />}
        </div>
      </Router>
    </div>
  )
}

export default Main;