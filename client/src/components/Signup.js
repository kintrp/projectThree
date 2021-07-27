import React, { Component } from 'react'
import { signup } from '../services/auth';

export default class SignUp extends Component {

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

            <div style={contentBox}>
                <form onSubmit={this.handleSubmit}>
                    <tr>
                        <td>
                            <label htmlFor="username">username:</label>
                        </td>
                        <td>
                            <input
                            type="text"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                            />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label htmlFor="username">email:</label>
                        </td>
                        <td>
                            <input
                            type="text"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="username">password:</label>
                        </td>
                        <td>
                            <input
                            type="text"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            />
                        </td>
                        
                    </tr>

                    <button type="submit">signup</button>
                </form>
            </div>
            </div>
        )
    }
}

const contentBox = {
    display: 'flex',
    justifyContent:'center',
}