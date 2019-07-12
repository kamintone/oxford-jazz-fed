import React, { Fragment } from 'react';

import Login from './Login';
import Register from './Register';
import Toggle from './utilities/Toggle';
import Modal from './utilities/Modal';

import jazzfinder from './images/jazz-finder-faded.png';

const Header = ({ user, setUser, isLoggedIn }) => {
  // console.log("User ", user.firstName)
  // console.log("is logged in: ", isLoggedIn)
  let inOut = "Login"
  isLoggedIn ? inOut = "Logout" : inOut = "Login"

  return (
    <header className="App-header">
      <h1 className="App-title">Oxfordshire Jazz Federation</h1>
      <span className="App-subtitle">incorporating</span>
      <img src={jazzfinder} className="App-img" alt="JazzFinder" title="JazzFinder" />
      <br />
      <br />

      <Toggle>
        {({ on, toggle }) => (
          <Fragment>
            <button className="login-button" onClick={toggle}>{inOut}</button>
            <Modal on={on} toggle={toggle}>
              <Login toggle={toggle} user={user} setUser={setUser} />
            </Modal>
          </Fragment>
        )}  
      </Toggle>

      {isLoggedIn === false && 
      <Toggle>
        {({ on, toggle }) => (
          <Fragment>
            <button className="register-button" onClick={toggle}>Register</button>
            <Modal on={on} toggle={toggle}>
              <Register />
            </Modal>
          </Fragment>
        )}  
      </Toggle>}

      {isLoggedIn === true && 
      <div id="logged-in-box" >
        Logged in as {user.firstName} {user.lastName}
      </div>}
    </header>
  )
}

  
export default Header;
