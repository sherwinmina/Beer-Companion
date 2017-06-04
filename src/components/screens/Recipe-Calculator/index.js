import React, { Component } from 'react';
import {Input} from 'react-materialize';

class Calculator extends Component {
  render () {
    return (
      <div className="container">
        <h4>Recipe Calculator</h4>
        <div className="row">
          <div className="col s4">
            <h4>Recipe</h4>
            <div className="row">
              the box
            </div>
          </div>
          
          <div className="col s8">
            <h4> Calculator</h4>
            
            <div className="row">
              the box
              <Input/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Calculator;