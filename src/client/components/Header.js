import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Navbar, NavItem, Dropdown, Button } from 'react-materialize';

import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import NavigationClose from "material-ui/svg-icons/navigation/close";
import FlatButton from "material-ui/FlatButton";
import { Tabs, Tab } from "material-ui/Tabs";

import { bubble as Menu } from "react-burger-menu";

import '../../styles/Header.scss'


class Header extends Component {
  constructor(props){
   super(props);
    this.state = {
      value: 'item',
    }
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  }

 

  render() {
    return <div id="outer-container">
        <div id="logo-container">
          <h4>Beer</h4>
          <img id="logo" src="/src/client/public/beer-outline-filled.png" alt="" />
          <h4>Companion</h4>
        </div>

        <Menu styles={styles}>
          <main id="page-wrap">
            <div>
              <Link id="home" className="menu-item" to="/beer">
                Beer
              </Link>
            </div>
            <div>
              <div>
                <Link to="/hops" className="menu-item">
                  Hops
                </Link>
              </div>
            </div>
            <div>
              <Link to="/grains" className="menu-item">
                Grains
              </Link>
            </div>
            <Link to="/yeast" className="menu-item">
              Yeast
            </Link>
            <div>
              <Link to="/calculator/priming" className="menu-item">
                Priming Calculator
              </Link>
            </div>
            <div>
              <Link to="/calculator" className="menu-item">
                Brewing Calculator
              </Link>
            </div>
            <div>
              <Link to="/signin" className="menu-item">
                Sign In
              </Link>
            </div>
            <div>
              <Link to="/signup" className="menu-item">
                Sign Up
              </Link>
            </div>
          </main>
        </Menu>
      </div>;
  }
}


export default Header;

var styles = {
  a:{
    textDecoration: 'none'
  },
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    left: "36px",
    top: "36px"
  },
  bmBurgerBars: {
    background: "white"
  },
  bmCrossButton: {
    height: "24px",
    width: "24px"
  },
  bmCross: {
    background: "#bdc3c7"
  },
  bmMenu: {
    background: "#373a47",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em"
  },
  bmMorphShape: {
    fill: "#373a47"
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em"
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)"
  }
};


