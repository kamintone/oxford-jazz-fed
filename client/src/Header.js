import React, { Fragment } from 'react';

// import Home from './Home';
import Login from './Login';
import Logout from './Logout';
// import Register from './Register';
import Toggle from './utilities/Toggle';
import Modal from './utilities/Modal';

import jazzfinder from './images/jazz-finder-reversed.png';

function Header ({ user, setUser, isLoggedIn, setLoggedIn }) {
  console.log("Entered Header function")
  console.log("User ", user)
  console.log("is logged in: ", isLoggedIn)
  // user ? setLoggedIn(true) : setLoggedIn(false)
  // let inOut = "Login"
  // isLoggedIn ? inOut = "Logout" : inOut = "Login"
  
  return (
    <header className="App-header">
      <h1 className="App-title">Oxfordshire Jazz Federation</h1>
      <span className="App-subtitle">incorporating</span>
      <br />
      <img src={jazzfinder} className="App-img" alt="Jazzfinder" title="Jazzfinder" />
      <br />
      <br />

      { isLoggedIn === false && 
      <Toggle>
        {({ on, toggle }) => (
          <Fragment>
            <button className="login-button" onClick={toggle}>Login</button>
            <Modal on={on} toggle={toggle}>
              <Login toggle={toggle} user={user} setUser={setUser} isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
            </Modal>
          </Fragment>
        )}  
      </Toggle>
      }

      { isLoggedIn === true &&
      <Toggle>
      {({ on, toggle }) => (
        <Fragment>
          <button className="login-button" onClick={toggle}>Logout</button>
          <Modal on={on} toggle={toggle}>
            <Logout setUser={setUser} setLoggedIn={setLoggedIn} />
            {/* <Home /> */}
          </Modal>
        </Fragment>
      )}  
    </Toggle>
    }

      {/* { isLoggedIn === false && 
      <Toggle>
        {({ on, toggle }) => (
          <Fragment>
            <button className="register-button" onClick={toggle}>Register</button>
            <Modal on={on} toggle={toggle}>
              <Register />
            </Modal>
          </Fragment>
        )}  
      </Toggle>} */}

      {isLoggedIn === true && 
      <div id="logged-in-box" >
        Logged in as <span style={{color: "red"}}>{user.merge_fields.FNAME} {user.merge_fields.LNAME}</span>
      </div>}
    </header>
  )
}

  
export default Header;
