import React, { Component, Fragment } from 'react';
// import { Modal, Toggle } from './utilities';
import Welcome from './Welcome'

class LogIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
      email: '',
			member: '',
      errorMess: ''
    }
    this.onSubmit = this.onSubmit.bind(this)
	}
	
  onSubmit = (event) => {
    event.preventDefault()
    let data = new FormData(event.target)
    if (!event.target.checkValidity()) {
      // form is invalid! so we do nothing
      console.log("Form invalid")
      return
    }  
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
          this.setState({
            member: null,
            errorMess: json.title
          })
        } else {
          this.setState({
            member: json
          })
          var firstName, lastName
          firstName = json.merge_fields.FNAME
          lastName = json.merge_fields.LNAME
          console.log("Member accepted:", firstName + " " + lastName)
        }
      })
      .catch((err) => {
        console.log("error", err)
      })
    }

	render() {
    // return (
    //   <Toggle>
    //     {({ on, toggle }) => (
    //       <Fragment>
    //         {/* <button className="register-button" onClick={toggle}>Register</button> */}
    //         <Modal on={on} toggle={toggle}>
    //           <h1>Not yet operational</h1>
    //         </Modal>
    //       </Fragment>
    //     )}  
    //   </Toggle>
    // )

    if (this.state.member) {
      var firstName, lastName
      firstName = this.state.member.merge_fields.FNAME
      lastName = this.state.member.merge_fields.LNAME
      return  <Welcome firstName={firstName} lastName={lastName} />
    } else if (this.state.errorMess !== '') {
        return (
          <div className="alert alert-warning text-left">
            <strong>Error: {this.state.errorMess}</strong>
          </div>
        )
      } else {
      return (
      <div id="App-content">
        <div className="section App-section App-form">
          <main className="pa3 blue-80">
            <div className="measure">
              <form onSubmit={this.onSubmit} id="sign_up" className="ba b--transparent ph0 mh0">
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
                      className="btn b ph3 pv2 mh2 fr input-reset ba b--black btn-danger text-white pointer f6 dib" type="button" onClick={this.handleCancel}>Cancel
                    </button>
                    <br />
                    <br />
                </div>
              </form>
            </div>
          </main>
        </div>	
      </div>
    )}
  }  
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