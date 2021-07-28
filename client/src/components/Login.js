import React, { Component } from 'react'
import { login } from '../services/auth';
import { Link } from 'react-router-dom';

export default class Login extends Component {

    state = {
        username: '',
        // email: '',
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
						password: '',
                        type:'',
					})
				} else {
					this.props.setUser(response);
                    // console.log(response)
                    if (response.type === 'adopter') {
                        this.props.history.push('/animals');
                    }
                    if (response.type === 'provider') {
                        this.props.history.push('/private');
                    }
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
                <h1>Plz, login here... </h1>
                <div style={contentBox}>

                    <form onSubmit={this.handleSubmit} >

                            <tr>
                                <td>
                                    <label htmlFor="username">username: </label>
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
                        <button type="submit">login</button> 
                    </form>
                </div>

                <div style={contentBox}>
                    <p>
                        (Don't have an account yet? Redirect to <Link to='/signup'>sign in</Link>)
                    </p>
                </div>

            
            </div>
  
    )
    }
}

const contentBox = {
    display: 'flex',
    justifyContent:'center',
    alignItems:'Center',
    flexDirection:'Column',
}
