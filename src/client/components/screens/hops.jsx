import React, { Component } from 'react'
import {Link} from 'react-router';
import {Collapsible, CollapsibleItem} from 'react-materialize';
import axios from 'axios';
import _ from 'lodash';


class Hops extends Component {
  constructor(props) {
    super(props);
    this.state = { myhops: [] };
  }

  requestData() {
    const request = axios.get('../../../../../data/hops.json')
    .then(response => {
      response.data.map((hop) => {
        // console.log(hop.name, hop.notes) 
        this.setState({myhops: hop.name})
      });  
    })
  }
 
  componentDidMount() {
    this.requestData();
  }
  
  renderList() {
    return this.state.myhops.map((hop) => {
      return (
        <li
          key={hop.name}
          className="list-group-item">
          {hop.name}
        </li>
      );
    });
  }

  render () {
    if (!this.state.myhops){
      return <div>Loading..</div>
    }
    return (
      <div>
        <h4 className="center-align">Variety of Hops</h4>
        {this.renderList()}  
      </div>
    )
  }
}
  
export default Hops;