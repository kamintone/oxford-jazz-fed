import React, { Component } from 'react';
import Welcome from './Welcome'
import Home from './Home'

class Register extends Component {

  constructor(props) {
		super(props);
		this.state = {
    //   firstName: '',
    //   lastName: '',
    //   email: '',
    //   status: 'pending',
    //   vip: false
      newMember: '',
      errorMess: '',
      cancelClicked: false
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
	}
  
  componentDidMount() {
    console.log("Register component mounted")
    if (this.state.newMember) {
      var firstName, lastName
      firstName = this.state.newMember.merge_fields.FNAME
      lastName = this.state.newMember.merge_fields.LNAME
      console.log("Member added:", firstName + " " + lastName)
      return  <Welcome firstName={firstName} lastName={lastName} />
    } else if (this.state.errorMess === "Member Exists") {
      return (
        <div className="prompt f6">
          <p>That email address is already subscribed. Please log in.</p>
          {/* <SignIn /> */}
          <br />
        </div>
      )  
    } else if (this.state.errorMess) {
      return (
        <div className="alert alert-warning text-left">
          <strong>Error: {this.state.errorMess}</strong>
        </div>
      )
    }
  }

	onSubmit = (event) => {
    if (this.state.cancelClicked) {
      this.setState({
        cancelClicked: false
      })
    } else {
    event.preventDefault()
    let data = new FormData(event.target)
    if (!event.target.checkValidity()) {
      // form is invalid! so we do nothing
      console.log("Form invalid")
      return
    }  
      fetch('/api/addMember/', {
        method: 'POST',
        body: stringifyFormData(data), // data can be `string` or {object}!
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then( (json) => {
        if (json.status === 400 || json.status === 404) {
          this.setState({
            newMember: null,
            errorMess: json.title
          })
          console.log("error: ", this.state.errorMess)
          } else {
          this.setState({
            newMember: json
          })
        }
      })
      .catch((err) => {
        console.log("error", err)
      })
    }  
  }

  handleCancel() {
    console.log("setting cancelClicked")
    this.setState({
      cancelClicked: true
    })
    console.log("Calling Home")
    return <Home />
}

// The render() function should be pure, meaning that it does not modify component state, it returns the same result each time it’s invoked, and it does not directly interact with the browser.
	render() {
    return (
        <div id="App-content">
          <div className="App-form">
            <h4>Register function not yet in operation</h4>
            {/* <main className="pa3 blue-80">
              <div className="measure">
                <form onSubmit={this.onSubmit} id="sign_up" className="ba b--transparent ph0 mh0">
                  <legend className="f4 fw6 ph0 mh0">Register</legend>
                  <div className="mt3">
                    <input className="pa1 input-reset ba b--black bg-light hover-black w-100"
                      placeholder="First Name"
                      type="text"
                      name="firstName"
                      id="firstName"
                      required
                    />
                  </div>
                  <div className="mt3">
                    <input className="pa1 input-reset ba b--black bg-light hover-black w-100"
                      placeholder="Last Name"
                      type="text"
                      name="lastName"
                      id="lastName"
                      required
                    />
                  </div>
                  <div className="mt3">
                    <input className="pa1 input-reset ba b--black bg-light hover-black w-100"
                      placeholder="Email address"
                      type="email"
                      name="email"
                      id="email"
                      required
                    />
                  </div>
                  <div className="mt3">
                    <button
                      className="btn b ph3 pv2 mh2 fl input-reset ba b--black btn-primary text-white pointer f6 dib"
                      type="submit">Submit
                    </button>
                    <button
                      className="btn b ph3 pv2 mh2 fr input-reset ba b--black btn-secondary text-white pointer f6 dib" type="button" onClick={this.handleCancel}>Cancel
                    </button>
                    <br />
                    <br />
                  </div>
                </form>
              </div>
            </main> */}
          </div>
        </div>
      )
    } /* end of render */
} /* end of Component */

  export default Register;

  function stringifyFormData(fd) {
    const data = {};
    for (let key of fd.keys()) {
      data[key] = fd.get(key);
    }
    return JSON.stringify(data, null, 2);
  }