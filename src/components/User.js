import React, { Component } from 'react'

class User extends Component {
  constructor(props) {
    super(props)
    // https://api.github.com/users/oraykt
    this.state = {
      "login": "oraykt",
      "id": 17630963,
      "node_id": "MDQ6VXNlcjE3NjMwOTYz",
      "avatar_url": "https://avatars.githubusercontent.com/u/17630963?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/oraykt",
      "html_url": "https://github.com/oraykt",
      "followers_url": "https://api.github.com/users/oraykt/followers",
      "following_url": "https://api.github.com/users/oraykt/following{/other_user}",
      "gists_url": "https://api.github.com/users/oraykt/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/oraykt/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/oraykt/subscriptions",
      "organizations_url": "https://api.github.com/users/oraykt/orgs",
      "repos_url": "https://api.github.com/users/oraykt/repos",
      "events_url": "https://api.github.com/users/oraykt/events{/privacy}",
      "received_events_url": "https://api.github.com/users/oraykt/received_events",
      "type": "User",
      "site_admin": false,
      "name": "Oray Kurt",
      "company": null,
      "blog": "oraykurt.com",
      "location": "Wrocław, Poland",
      "email": null,
      "hireable": null,
      "bio": "a developer who enjoys the life",
      "twitter_username": "oraykt",
      "public_repos": 55,
      "public_gists": 9,
      "followers": 4,
      "following": 1,
      "created_at": "2016-03-04T02:11:37Z",
      "updated_at": "2021-07-08T10:08:53Z"
    }
  }

  render() {
    const { id, avatar_url, name, html_url, followers, blog } = this.state

    return (
      <div className="card m-2">
        <div className="row">
          <div className="col-3">
            <img src={avatar_url} alt={id} className="card-img"/>
          </div>
          <div className="col-9">
            <div className="card-body">
              <h5 className="card-title">
                <a href={html_url}>{name}</a>
              </h5>
              <p className="card-text">Followers: {followers}</p>
              {blog && <p className="card-text">Blog: {(<a href={blog}>{blog}</a>)}</p>}
            </div>
          </div>
        </div>
        User
      </div>
    )
  }
}

export default User
