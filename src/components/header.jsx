import React, { Component } from 'react';
import { Link } from 'react-router';
import { Navbar, NavItem } from 'react-materialize';

class Header extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      // show a Link to log out
      <NavItem className="nav-item">
        <Link className="nav-link" to="/signout"></Link>
      </NavItem>
    } else {
      // Show a link to sign in or sign out
      return [
        <NavItem>
           <Link className="nav-link" to="/beer">Beer</Link>
        </NavItem>,
        <NavItem>
           <Link className="nav-link" to="/hops">Hops</Link>
        </NavItem>,
        <NavItem className="nav-item">
           <Link className="nav-link" to="/grains">Grains</Link>
        </NavItem>,
        <NavItem className="nav-item">
           <Link className="nav-link" to="/yeast">Yeast</Link>
        </NavItem>,
        <NavItem className="nav-item">
           <Link className="nav-link" to="/signin">Sign In</Link>
        </NavItem>,
        <NavItem className="nav-item">
          <Link className="nav-link" to="/signup">Sign Up</Link>
        </NavItem>
      ];
    }
  }

  render() {
    return (
      <Navbar >
        <NavItem >
          {this.renderLinks()}
        </NavItem>
      </Navbar>
    );
  }
}



export default Header;
