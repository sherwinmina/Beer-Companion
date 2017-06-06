import React, { Component } from 'react';
import Header from './header';
import { Row } from 'react-materialize';

export default class App extends Component {
  render() {
     return (
       <div>
          <Header/>
          <div style={divStyle}>
             {this.props.children}
          </div>     
       </div>
    );
  }
}

const divStyle = {
  padding: "60px"
}
