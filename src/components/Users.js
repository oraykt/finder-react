import React, { Component } from 'react'
import User from './User'

class Users extends Component {
  render() {
    return (
      <div className="container mt-2">
        <div className="row">
          {this.props.users.map(user => (
          <User key={user.id} user={user} />
          ))}
        </div>
      </div>
    )
  }
}

export default Users
