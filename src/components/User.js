import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class User extends Component {
  render() {
    const { id, avatar_url, login } = this.props.user

    return (
      <div className="col-md-4 col-sm-6 col-lg-3">
        <div className="card m-2">
        <img src={avatar_url} alt={id} className="img-fluid"/>
        <div className="card-body">
          <h5 className="card-title">
            {login}
          </h5>
          <Link to={`/user/${login}`} className="btn btn-primary btn-sm">Go Profile</Link>
        </div>
        </div>
      </div>
    )
  }
}

export default User
