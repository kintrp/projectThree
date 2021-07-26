import React, { Component } from 'react'
import { login } from '../services/auth';

export default class Login extends Component {

    state = {
        username: '',
        email: '',
        password: '',
    }

    handleSubmit = e => {
		e.preventDefault();
		const { username, password } = this.state;
		login(username, password)
			.then(response => {
				if (response.message) {
					this.setState({
						message: response.message,
						username: '',
						password: ''
					})
				} else {
					this.props.setUser(response);
					this.props.history.push('/animals/private');
				}
			})
	}

    handleChange = e => {
        const {name, value} = e.target;
        this.setState({
            [name]:value
        })
    }

    render() {
        // console.log(this.state);
        return (
        <div>
            <h1>Plz login here... </h1>
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
                    <button type="submit">login</button>
                </form>
            </div>
        )
    }
}
