import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../store/actions/usersAction'

class users extends Component {
  componentDidMount() {
    this.props.getUsers()
  }
  render() {
    const { users } = this.props.users

    return (
      <div>
        {users.map(u => 
          <React.Fragment key={u.id}>
              <h6 >{u.first_name}, {u.last_name}</h6> 
          </React.Fragment>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ users: state.users })

export default connect(mapStateToProps, { getUsers })(users)