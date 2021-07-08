import React, { Component } from 'react'
import User from './User'

class Users extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [
        {
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
        },{
          "login": "KonradPakosz",
          "id": 42554245,
          "node_id": "MDQ6VXNlcjQyNTU0MjQ1",
          "avatar_url": "https://avatars.githubusercontent.com/u/42554245?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/KonradPakosz",
          "html_url": "https://github.com/KonradPakosz",
          "followers_url": "https://api.github.com/users/KonradPakosz/followers",
          "following_url": "https://api.github.com/users/KonradPakosz/following{/other_user}",
          "gists_url": "https://api.github.com/users/KonradPakosz/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/KonradPakosz/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/KonradPakosz/subscriptions",
          "organizations_url": "https://api.github.com/users/KonradPakosz/orgs",
          "repos_url": "https://api.github.com/users/KonradPakosz/repos",
          "events_url": "https://api.github.com/users/KonradPakosz/events{/privacy}",
          "received_events_url": "https://api.github.com/users/KonradPakosz/received_events",
          "type": "User",
          "site_admin": false,
          "name": null,
          "company": null,
          "blog": "",
          "location": "Ireland",
          "email": null,
          "hireable": null,
          "bio": null,
          "twitter_username": null,
          "public_repos": 10,
          "public_gists": 0,
          "followers": 2,
          "following": 2,
          "created_at": "2018-08-20T19:53:20Z",
          "updated_at": "2021-06-16T14:57:51Z"
        }
      ]
    }
  }
  render() {
    return (
      <div className="container mt-2">
        <div className="row">
          {this.state.users.map(user => (
          <User key={user.id} user={user} />
          ))}
        </div>
      </div>
    )
  }
}

export default Users
