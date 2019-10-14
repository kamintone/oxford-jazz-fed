import React, { useState } from 'react';

function LogIn ({ toggle, user, setUser, setLoggedIn }) {
  console.log("Entered Login function")

  const [errorMess, setError] = useState('')

  // const handleCancel = () => {
  //   console.log("Cancel clicked")
  //   return
  // }

  const myFunction = (event) => {
    event.preventDefault()
    let data = new FormData(event.target)
    if (!event.target.checkValidity()) {
      // form is invalid! so we do nothing
      console.log("Form invalid")
      return
    } else {
      console.log("Fetching member")
      fetch('/api/getMember', {
        method: 'PATCH',
        body: stringifyFormData(data),
        headers: {
          'Content-Type': 'application/json',
          'Host': "https//us17.api.mailchimp.com/3.0"
        }
      })
      .then(res => res.json())
      .then( (json) => {
        if (json.status === 400 || json.status === 404) {
          console.log("Fetch failed")
          setUser('')
          setError('Email is not listed')
        } else {
            console.log("Fetch succeeded")
            setUser(json)
            // fetch was successful - setState causes re-render: 1 and 2
            var firstName, lastName;
            firstName = json.merge_fields.FNAME;
            lastName = json.merge_fields.LNAME;
            console.log("Member accepted:", firstName + " " + lastName);
            setLoggedIn(true)
          }
        })
      .catch((err) => {
        console.log("error", err)
      })
    }
  }
  // comes here when Login/Logout clicked
  console.log("member: ", user); //*************1/4 */
  if (user) {
    toggle()
    return null
} else if (errorMess !== '') {
      return (
        <div className="alert alert-warning text-center" style={{ backgroundColor: "#eceeb4", marginTop: "20px"}}>
          <strong>{errorMess}</strong>
        </div>
      )
    } else {
    return (
    <div id="App-content">
      <div className="App-form">
        <main className="pa3 blue-80">
          <form onSubmit={myFunction} id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0">Log In</legend>
            <div className="mt3">
              <input className="pa1 input-reset ba b--black bg-light hover-black w-100"
                placeholder="Email address (required)"
                type="email"
                name="email"
                id="email"
                required
              />
            </div>
            <br />
              <input className="pa1 input-reset ba b--black bg-light hover-black w-100"
                placeholder="Membership number"
                type="text"
                name="memberno"
                id="memberno"
              />
            <br />
            <div className="mt3">
            <button
                  className="btn b ph3 pv2 mh2 fl input-reset ba b--black btn-primary text-white pointer f6 dib"
                  type="submit">Submit
            </button>
                {/* <button
                  className="btn b ph3 pv2 mh2 fr input-reset ba b--black btn-secondary text-white pointer f6 dib" type="button" onClick={handleCancel}>Cancel
                </button>  */}
                <br />
                <br />
            </div>
          </form>
        </main>
      </div>	
    </div>
  )}
}


export default LogIn;

function stringifyFormData(fd) {
  const data = {};
  for (let key of fd.keys()) {
    data[key] = fd.get(key)
    // data is an object, e.g. { email: "hhall@waitrose.com" }
  }
  return JSON.stringify(data, null, 2);
    // returns e.g. { "email": "hhall@waitrose.com" }
  }