import React, { Component } from 'react'
import {Link} from 'react-router';
import {Collapsible, CollapsibleItem} from 'react-materialize';

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

    return hops.map((hop) => {
      return (        
          <CollapsibleItem key={hop.name} header={hop.name} accordion='true'
          > 
            {hop.description}   
          </CollapsibleItem>  
        );
    });
  }

  render () {
    return (
      <div>
        <h4 className="center-align">Varity of hopsHops</h4>
        <div className="collapsible">{this.renderList()}</div> 
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