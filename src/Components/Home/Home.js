import React, { Component } from 'react'
import SingleUser from '../SingleUser/SingleUser';

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users : [],
            addUser : [],
           
        }
        this.handlerAddUser = this.handlerAddUser.bind(this);
    }
    
        componentDidMount() {
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(res=>res.json())
            .then(data=>this.setState({users:data}));
          }


        handlerAddUser(user) {
            const newUser = [...this.state.addUser,user]
            this.setState({addUser : newUser})
            console.log(user);
        }
    render() {
        return (
            <div>
               <h1>Total User : {this.state.users.length}</h1>
               <h1>Add User : {this.state.addUser.length}</h1>
            {
                this.state.users.map(user=><SingleUser 
                    user={user}
                    handlerAddUser={this.handlerAddUser}
                    >

                    </SingleUser>)
            }
            </div>
        )
    }
}

export default Home

