import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div style={contentBox}>
                <div>
                    <h1>Animal connect</h1>
                    <p>The purpose of this website is to introduce animals to people.</p>
                </div>
                <div>
                    <Link to='/signup' className="buttonAdd">sign up</Link>
                </div>
                <div>
                    <Link to='/login' className="buttonAdd">log in</Link>
                </div>
            </div>
        )
    }
}

const contentBox = {
    display: 'flex',
    flexDirection:'Column',
    alignItems:'Center',
}
