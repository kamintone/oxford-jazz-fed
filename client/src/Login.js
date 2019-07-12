import React from 'react';

const LogIn = ({ user, setUser }) => {
  const handleCancel = () => {
    return
  }
  const myFunction = (event) => {
    event.preventDefault()
    let data = new FormData(event.target)
    if (!event.target.checkValidity()) {
      // form is invalid! so we do nothing
      console.log("Form invalid")
      return
    } else {
      console.log("Fetching member")
      fetch('api/getMember', {
        method: 'PATCH',
        body: stringifyFormData(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then( (json) => {
        if (json.status === 400 || json.status === 404) {
          setUser(null)
        } else {
            setUser(json)  
            // fetch was successful - setState causes re-render: 1 and 2
            var firstName, lastName;
            firstName = json.merge_fields.FNAME;
            lastName = json.merge_fields.LNAME;
            console.log("Member accepted:", firstName + " " + lastName); //*************3 */
            // this.setState ({
            //   user: {
            //     name: firstName + " " + lastName
            //   }
            // })
            // setStatecauses re-render 4 and 5
          }
        })
      .catch((err) => {
        console.log("error", err)
      })
    }
  }
  

  console.log("member: ", user); //*************1/4 */
  let errorMess = ''  
  if (user) {
    let firstName = user.merge_fields.FNAME;
    let lastName = user.merge_fields.LNAME;
    console.log("from user: ", firstName + " " + lastName) //*************2/5 */
    return null;
  } else if (errorMess !== '') {
      return (
        <div className="alert alert-warning text-left">
          <strong>Error: {errorMess}</strong>
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
                placeholder="Email address"
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
                <button
                  className="btn b ph3 pv2 mh2 fr input-reset ba b--black btn-secondary text-white pointer f6 dib" type="button" onClick={handleCancel}>Cancel
                </button> 
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