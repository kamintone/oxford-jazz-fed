import React, { Component } from 'react';

class LogIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
      member: '',
      // user: {
      //   name: '',
      //   isVIP: false
      // },
      errorMess: '',
      cancelClicked: false
    }
    this.onSubmit = this.onSubmit.bind(this)
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
            });
            // fetch was successful - setState causes re-render: 1 and 2
            var firstName, lastName;
            firstName = json.merge_fields.FNAME;
            lastName = json.merge_fields.LNAME;
            console.log("Member accepted:", firstName + " " + lastName); //*************3 */
            this.setState ({
              user: {
                name: firstName + " " + lastName
              }
            })
            // setStatecauses re-render 4 and 5
            console.log("user name: ",this.state.user.name) //*************6 */
          }
        })
      .catch((err) => {
        console.log("error", err)
      })
    }
  }

  render() {
    console.log("member: ", this.state.member); //*************1/4 */
    if (this.state.member) {
      let firstName = this.state.member.merge_fields.FNAME;
      let lastName = this.state.member.merge_fields.LNAME;
      console.log(firstName + " " + lastName) //*************2/5 */
      return null;
    } else if (this.state.errorMess !== '') {
        return (
          <div className="alert alert-warning text-left">
            <strong>Error: {this.state.errorMess}</strong>
          </div>
        )
      } else {
      return (
      <div id="App-content">
        <div className="App-form">
          <main className="pa3 blue-80">
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
                    className="btn b ph3 pv2 mh2 fr input-reset ba b--black btn-secondary text-white pointer f6 dib" type="button" onClick={this.handleCancel}>Cancel
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