import React, { Component } from 'react'
import { signup } from '../services/auth';

export default class SignUp extends Component {

    // constructor(props) {
    //     super(props);

        state = {
            username: '',
            email: '',
            password: '',
            message: '',
        }
   
    handleSubmit = event => {
        event.preventDefault();
    
        const { username, email, password } = this.state;
    
        signup(username, email, password).then(data => {
          if (data.message) {
            this.setState({
              message: data.message,
              username: '',
              password: ''
            });
          } else {
            this.props.setUser(data);
            this.props.history.push('/login');
          }
        });
      };

    handleChange = e => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        // console.log(this.state)
        return (
            <div>
                <h1>Hello future user... Plz, sign up below.</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">username:</label>
                    <input
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="username">email:</label>
                    <input
                        type="text"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="username">password:</label>
                    <input
                        type="text"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <button type="submit">signup</button>
                </form>
            </div>
        )
    }
}
