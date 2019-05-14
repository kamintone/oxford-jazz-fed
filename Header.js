import React, { Fragment } from 'react';
// import { Toggle, Modal } from './utilities';
import jazzfinder from './images/jazz-finder-title-blue.png';

function Header() {
  return (
    <header className="App-header">
      <h1 className="App-title">Oxfordshire Jazz Federation</h1>
      <span className="App-subtitle">incorporating</span>
      <img src={jazzfinder} className="App-img" alt="JazzFinder" />
      <p className="App-subtitle">Hon. Patron Alyn Shipton</p>
      {/* <Toggle>
        {({ on, toggle }) => (
          <Fragment>
            <button className="register-button" onClick={toggle}>Register</button>
            <Modal on={on} toggle={toggle}>
              <h1>Now in modal</h1>
            </Modal>
          </Fragment>
        )}  
      </Toggle>
      <Toggle>
        {({ on, toggle }) => (
          <Fragment>
            <button className="login-button" onClick={toggle}>Login</button>
            <Modal on={on} toggle={toggle}>
              <h1>Now in modal</h1>
            </Modal>
          </Fragment>
        )}  
      </Toggle> */}
  </header>
  )
}
  
export default Header;
