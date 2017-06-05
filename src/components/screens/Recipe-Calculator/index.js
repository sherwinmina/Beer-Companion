import React, { Component } from 'react';
import Foundation from 'react-foundation';

class Calculator extends Component {
  render () {
    return (
     
      <div className="">
        <h4 className="center-align">Recipe Calculator</h4>
        <div className="row">
        
        </div>

        <div className="row">
          <div className="col s6">
            <h4>Recipe</h4>
            <div className="row">
              <label><h5>Units:<input  /></h5></label>
            </div>
          </div>
          
          <div className="col s6">
            <h4> Calculator</h4>
            
            <div className="row">
              
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Calculator;