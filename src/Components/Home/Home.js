import React, { Component } from 'react'

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users : []
           
        }
    }
    
        componentDidMount() {
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(res=>res.json())
            .then(data=>this.setState({users:data}));
          }
    render() {
        return (
            <div>
                {this.state.users.length}
            </div>
        )
    }
}

export default Home

