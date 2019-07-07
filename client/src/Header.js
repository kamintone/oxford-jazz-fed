import React, { Fragment, Component } from 'react';

import Login from './Login';
import Register from './Register';
import Toggle from './utilities/Toggle';
import Modal from './utilities/Modal';

import jazzfinder from './images/jazz-finder-faded.png';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }
  
  render() {
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
              <button className="login-button" onClick={toggle}>Login</button>
              <Modal on={on} toggle={toggle}>
                <Login toggle={toggle} />
              </Modal>
            </Fragment>
          )}  
        </Toggle>
        <Toggle>
          {({ on, toggle }) => (
            <Fragment>
              <button className="register-button" onClick={toggle}>Register</button>
              <Modal on={on} toggle={toggle}>
                <Register />
             </Modal>
            </Fragment>
          )}  
        </Toggle>
      </header>
    )
  }
}
  
export default Header;
