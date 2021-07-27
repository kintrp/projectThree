import React from 'react'
import { Link } from 'react-router-dom';
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

				{props.user ? (
					<>
						<div>
							<Link to='/' onClick={() => handleLogout()} className="button">Logout</Link>
						</div>
					</>
				) : (
					<>
						<div>
							<Link to='/signup' className="button">Sign up</Link>
							<Link to='/login' className="button">Log in</Link>
						</div>
					</>
				)}
			</ul>
		</nav>
	)
}
