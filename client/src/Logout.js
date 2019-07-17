import React from 'react'

function Logout ({ setUser, setLoggedIn }) {
  console.log("Entered Logout function")
  return (
    <div>
      {setUser('')}
      {setLoggedIn(false)}
      <h4>You have been logged out</h4>
    </div>
  )
}

export default Logout
