import React, { Component } from 'react'

class Member extends Component {

  constructor(props) {
    super(props)
    this.state = {
      route: 'signin',
      isSignedIn: false,
      isAdmin: false
    }
  }

  render() {
    return (
      <div>Name: </div>
    )
  } 
}


export default Member