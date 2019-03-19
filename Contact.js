import React from 'react';

function Contact() {
  return (
    <div id="App-content">
      <div id="contact-details" className="App-section">
        <h3>Contact Us</h3>
        <br />
        <h5>Committee Members:</h5>
        <p>OXFORDSHIRE JAZZ FEDERATION<br/>
          c/o 21 Sandford Close<br/>
          Abingdon<br/>
          Oxon<br/>
          OX14 2PX</p>
        <hr />
        <p>Dorothy Shaw,<br/>
          Hon. Secretary<br/>
          <a className="btn btn-primary" href="mailto:dorothy.giacomin@gmail.com">Email Dorothy</a><br/>
          Tel: 01235 523230</p>
        <hr />
        <p>Simon Feast<br/>
          Hon. Treasurer<br/>
          {/* 16 Martins Lane<br/> */}
          {/* Dorchester on Thames<br/> */}
          {/* OX10 7JB<br/> */}
          <a className="btn btn-primary" href="mailto:simon.feast@gmail.com">Email Simon</a><br/>
          Tel: 01865 340296</p>
        <hr />
        <p>Rachel Holt<br/>
          <a className="btn btn-primary" href="mailto:rholt29@hotmail.com">Email Rachel</a></p>
        <hr />
        <p>Judy Eames<br/>
          <a className="btn btn-primary" href="mailto:jude@judyeames.co.uk">Email Judy</a></p>
        <hr />
        <p>Tony Davis<br/>
          <a className="btn btn-primary" href="mailto:tony@tony-davis.co.uk">Email Tony</a></p>
        <br />
      </div>
    </div>
  );
}

export default Contact;