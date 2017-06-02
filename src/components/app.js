import React, { Component } from 'react';
import Header from './header';
import { Row } from 'react-materialize';

export default class App extends Component {
  render() {
     return (
       <Row>
          <Header/>
          <div className="row" style={divStyle}>
             {this.props.children}
          </div>     
       </Row>
    );
  }
}

const divStyle = {
  padding: "40px"
}
