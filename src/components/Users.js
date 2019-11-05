import React, { Component } from 'react'
import { connect } from 'react-redux'

class Users extends Component {
  render() {
    return (
      <div>
        Users
      </div>
    )
  }
}

function mapStateToProps ({ users }) {
  return {
    usersIds: Object.keys(users)
      .sort((a,b) => users[b].timestamp - users[a].timestamp)
  }
}

export default connect(mapStateToProps)(Users)