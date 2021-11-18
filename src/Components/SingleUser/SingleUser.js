import React, { Component } from 'react'

export class SingleUser extends Component {
    render() {
        return (
            <div>
                <h1>Name : {this.props.user.name}</h1>
                <p>Email : {this.props.user.email}</p>
                <button onClick={e=>this.props.handlerAddUser(this.props.user)}>Add user</button>
            </div>
        )
    }
}

export default SingleUser
