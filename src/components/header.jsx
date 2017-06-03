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
           <Link  to="/beer">Beer</Link>
        </NavItem>,
        <NavItem>
           <Link  to="/hops">Hops</Link>
        </NavItem>,
        <NavItem >
           <Link  to="/grains">Grains</Link>
        </NavItem>,
        <NavItem >
           <Link  to="/yeast">Yeast</Link>
        </NavItem>,
        <NavItem >
           <Link  to="/signin">Sign In</Link>
        </NavItem>,
        <NavItem >
          <Link  to="/signup">Sign Up</Link>
        </NavItem>
      ];
    }
  }

  render() {
    return (
      <Navbar brand='Beer-Guide' left>
          {this.renderLinks()}
      </Navbar>
    );
  }
}



export default Header;
