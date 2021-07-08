import React, { Component, Fragment } from 'react'

class Search extends Component {
  constructor(props) {
    super(props)
    this.onChange= this.onChange.bind(this)
    this.onSubmit= this.onSubmit.bind(this)
    this.state = {
      keyword:''
    }
  }

  onChange(e) {
    this.setState({
      keyword: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault()
    if (!this.state.keyword) {
      alert('Please type username')
    } else {
      this.props.searchUsers(this.state.keyword)
      this.setState({ keyword: '' })
    }
  }

  render() {
    return (
      <div className="container my-3">
        <form onSubmit={this.onSubmit}>
          <div className="input-group">
            <input type="text" value={ this.state.keyword } className="form-control" onChange={this.onChange} placeholder="Please type Github username"/>
            <div className="input-group-append">
              <button type="submit" className="btn btn-info">Search</button>
            </div>
          </div>
        </form>
        
        {this.props.showClearButton && <button className="btn btn-secondary btn-sm btn-block mt-2" onClick={this.props.clearUsers}>Clear Results</button>}
        
      </div>
    )
  }
}

export default Search