import React, { Component } from 'react';
// import Register from './Register';

class Admin extends Component {
  constructor() {
    super()
    this.state = {
      listMembers: '',
      totalItems: 0,
    }
    this.clearList = this.clearList.bind(this)
  }

  clearList() {
    this.setState({
      listMembers: '',
      totalItems: 0
    })
  }
  
    // returns a JSON object with a key of "members" and
  // value of an array of objects
  getMembers = () => {
    fetch("/api/memberList", {
      "Host": "https//us17.api.mailchimp.com/3.0"
    })
    .then((res) => {
      return res.json()
    })
    .then( (json) => {
      this.setState({
        listMembers: json.members,
        totalItems: json.total_items
      })
      // console.log("Members:", this.state.listMembers)
    })
    .catch((err) => {
      console.log("error", err)
    })
  }

  render() {
    let members = this.state.listMembers
    if(this.state.listMembers) {
      return (
        <div id="contact-details" className="App-section">
        <h3 style={{ textAlign: "center" }}>OJF Members</h3>
        <br />
          <h6 style={{ textAlign: "center", fontWeight: "normal", color: "red" }}>*has admin privileges</h6>
          <button className="get-members-button" onClick={this.clearList}>Clear List</button>
          <br /><br />
          <p>
            <table className="memList">
              {
                members.map((member, index) =>
                  <tr className="memLine" key={index}>
                  <td className="memStar">
                    {`${member.vip}` === "true" ? '*' : ' '}
                  </td>
                  <td className="memCol">
                    {`${member.merge_fields.FNAME} 
                    ${member.merge_fields.LNAME}: `}
                  </td>
                  <td className="memCol">
                    {`${member.email_address}`}   
                  </td>
                  <td className="memCol">
                    {`${member.status}`}
                  </td>
                  </tr>
                )
              }
            </table>
          </p>
          <br />
        </div>
      )
    }

    return (
      <div id="contact-details" className="App-section">
      <h3 style={{ textAlign: "center" }}>Manage Membership</h3>
        <br />
        <button className="get-members-button" onClick={this.getMembers}>List All Members</button>
        <br /><br />
      </div>
    )
  }
}

export default Admin