import React, { Component } from 'react';
import { Link } from 'react-router';
import logo from './logo.svg';

class Header extends Component {
	render() {
		return (
			<div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    <ul className="nav">
			          <li><Link to="/" activeClassName="active">Home</Link></li>
			          <li><Link to="/about" activeClassName="active">About</Link></li>
			        </ul>
                </p>
            </div>
	    );
	}
}

export default Header;