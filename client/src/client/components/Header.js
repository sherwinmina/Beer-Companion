import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import { Navbar, NavItem, Dropdown, Button } from 'react-materialize';

import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import FlatButton from 'material-ui/FlatButton'
import { Tabs, Tab } from 'material-ui/Tabs'

import { elastic as Menu } from 'react-burger-menu'

import '../styles/Header.scss'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 'item'
    }
  }

  handleChange = value => {
    this.setState({
      value: value
    })
  }

  render() {
    return (
      <div id="outer-container">
        <div id="logo-container">
          <img
            id="logo"
            src={require('../public/beer-outline-filled.png')}
            alt=""
          />
        </div>

        <Menu
          styles={styles}
          customBurgerIcon={<img src={require('../public/food.png')} />}
        >
          <img
            id="logo-in-menu"
            src={require('../public/beer-outline-filled.png')}
            alt=""
          />
          <p id="logo-text"> Beer Companion</p>

          <main id="page-wrap">
            <div className="box-menu">
              <Link id="home" className="menu-item" to="/">
                Beer
              </Link>
            </div>
            <div className="box-menu">
              <Link to="/hops" className="menu-item">
                Hops
              </Link>
            </div>
            <div className="box-menu">
              <Link to="/search" className="menu-item">
                Search
              </Link>
            </div>
            <div className="box-menu">
              <Link to="/brewerylocator" className="menu-item">
                Brewery Locator
              </Link>
            </div>
            <div className="box-menu">
              <Link to="/yeast" className="menu-item">
                Yeast
              </Link>
            </div>
            <div className="box-menu">
              <Link to="/calculator/priming" className="menu-item">
                Priming Calculator
              </Link>
            </div>
            <div className="box-menu">
              <Link to="/calculator" className="menu-item">
                Brewing Calculator
              </Link>
            </div>
            <div className="box-menu">
              <Link to="/signin" className="menu-item">
                Sign In
              </Link>
            </div>
            <div className="box-menu">
              <Link to="/signup" className="menu-item">
                Sign Up
              </Link>
            </div>
          </main>
        </Menu>
      </div>
    )
  }
}

export default Header

var styles = {
  customBurgerIcon: {
    height: '300px'
  },
  bmBurgerButton: {
    position: 'fixed',
    width: '60px',
    height: '8%',
    left: '25px',
    top: '2px'
  },
  bmBurgerBars: {
    background: '#9599B3',
    border: '1px solid black'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#373a47',
    // padding: "3.5em 2.5em 0",
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47',
    boxShadow: '1px 1px 2px grey'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  },
  bmItemList: {
    background: '#373a47',
    boxShadow: '0px 0px 0px'
  }
}
