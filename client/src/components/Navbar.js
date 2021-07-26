import React from 'react'
import { Link } from 'react-router-dom';
// import Signup from './Signup';
// import Login from './Login';
import { logout } from '../services/auth';

export default function Navbar(props) {

	const handleLogout = () => {
		logout().then(() => {
			props.setUser(null);
		})
	}

	return (
		<nav>
			<ul>
				{/* <li>
					<Link to='/'>Home</Link>
				</li> */}
				{props.user ? (
					<>
						<li>
							<Link to='/animals'>animals</Link>
						</li>
						<li>
							<Link to='/' onClick={() => handleLogout()}>Logout</Link>
						</li>
					</>
				) : (
					<>
						<li>
							<Link to='/signup'>Sign up</Link>
						</li>
						<li>
							<Link to='/login'>Log in</Link>
						</li>
					</>
				)}
			</ul>
		</nav>
	)
}
