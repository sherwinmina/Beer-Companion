import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      // show a Link to log out
      <li className="nav-item">
        <Link className="nav-link" to="/signout"></Link>
      </li>
    } else {
      // Show a link to sign in or sign out
      return [
        <li className="nav-item">
           <Link className="nav-link" to="/beer">Beer</Link>
        </li>,
        <li className="nav-item">
           <Link className="nav-link" to="/hops">Hops</Link>
        </li>,
        <li className="nav-item">
           <Link className="nav-link" to="/grains">Grains</Link>
        </li>,
        <li className="nav-item">
           <Link className="nav-link" to="/yeast">Yeast</Link>
        </li>,
        <li className="nav-item">
           <Link className="nav-link" to="/signin">Sign In</Link>
        </li>,
        <li className="nav-item">
          <Link className="nav-link" to="/signup">Sign Up</Link>
        </li>
      ];
    }
  }

  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-light">
      <Link to="/" className="navbar-collapse collapse">Beer-Guide</Link>
        <ul className="nav navbar-nav">
          {this.renderLinks()}
        </ul>
      </nav>
    );
  }
}



export default Header;
