import React, { Component } from 'react';
import { Link } from 'react-router';
import { Navbar, NavItem, Dropdown, Button } from 'react-materialize';

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
          <li>  <Link  to="/beer">Beer</Link> </li>
        ,
           <li> <Link  to="/hops">Hops</Link> </li>
        ,
           <li> <Link  to="/grains">Grains</Link> </li>
        ,
           <li> <Link  to="/yeast">Yeast</Link> </li>
        ,
           <Dropdown trigger={
              <NavItem>Recipe Calculator</NavItem>
            }>
             <li><Link  to="/calculator/priming">Priming Calculator</Link></li>
            <li><Link  to="/calculator">Brewing Calculator</Link></li>
          </Dropdown>
        ,
           <li> <Link  to="/signin">Sign In</Link> </li>
        ,
           <li> <Link  to="/signup">Sign Up</Link>  </li>  
      ];
    }
  }

  render() {
    return (
      <Navbar brand='Beer-Guide' left className="blue-grey darken-2 z-depth-0">
        <ul className="left" style={{fontWeight:"200"}}>
           {this.renderLinks()}
        </ul> 
      </Navbar>
    );
  }
}



export default Header;
