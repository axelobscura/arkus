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
      <div className="cards">
        {users.map(u => 
          <React.Fragment key={u.id}>
            <div className="card">
              <div className="imagen">
                <img src={u.avatar} alt={u.first_name} />
              </div>
              <h6 ><span class="lnr lnr-arrow-right"></span> {u.first_name}, {u.last_name}</h6> 
              <p>{u.email}</p>
              <div className="iconos">
                <span class="lnr lnr-pencil"></span>
                <span class="lnr lnr-cross"></span>
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ users: state.users })

export default connect(mapStateToProps, { getUsers })(users)