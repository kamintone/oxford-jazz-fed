import React from 'react';

const Welcome = ({firstName, lastName}) => (
  
  <div id="logged-in-box" style={{width: (firstName.length+lastName.length+14) * 10}}>
    <p>Logged in as {firstName} {lastName}</p>
  </div>
)

export default Welcome