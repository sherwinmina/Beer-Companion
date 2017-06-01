import React, { Component } from 'react'
import {Link} from 'react-router';
import ToggleDisplay from 'react-toggle-display';

class Hops extends Component {
  constructor() {
    super();
    this.state = { show: false };
  }
 
  handleClick() {
    this.setState({
      show: !this.state.show
    });
  }
  
  renderList() {
    const showHide = {
      'display': this.state.isHidden ? 'block' : 'none'
    };

    return hops.map((hop) => {
      return ( 
        <div>
          <li key={hop.name} className="list-group-item nav-link"
           onClick={() => this.handleClick()}> 
            {hop.name}   +
          </li> 
        <ToggleDisplay show={this.state.show}>
           <div className="list-group-item">
            {hop.description}
          </div>
        </ToggleDisplay>
           
          
        </div>     
        );
    });
  }

  render () {
    return (
      <div>
        <h1>Hops {console.log(this.state)}</h1>
        <ul >{this.renderList()}</ul>
       
      </div>
    )
  }
}

const hops = [
    { name: "Simcoe",
      description: "In 2000, Select Botanicals Group released the Simcoe Brand YCR 14 hop variety which is an aroma variety known for its versatility and unique characteristics. Simcoe Brand hops boasts several different aromas including passion fruit, pine, earthy, and citrus, and also has strong bittering qualities with an alpha acid level of 12%-14%. It is used extensively in the craft and home brewing industry."
    }, 
    { name: "Chinook",
      description: "Popular American development in 1976 of the English Fuggle. Named for the Willamette Valley, an important hop-growing area. It has a character similar to Fuggle, but is more fruity and has some floral notes."
    }, 
    { name: "Amarillo",
      description: "A high alpha acid bittering hop with mild flavor and low aromatic characteristics. Commercial examples include. 12-15% alpha acid."
    }
  ];

export default Hops