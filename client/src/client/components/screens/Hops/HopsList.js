import React, { Component } from 'react'
import {Link} from 'react-router';
import { connect } from 'react-redux';
import {Collapsible, CollapsibleItem, Row, Col, Collection, CollectionItem } from 'react-materialize';


import { selectHops, fetchHops } from '../../../actions';
import { bindActionCreators } from 'redux';

import HopDetail from './hop-detail'

class HopsList extends Component {
  constructor(props){
    super(props)

    this.state = { clickedItem: null };
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    this.setState({clickedItem: event.target.textContent})
  }

  render() {
    let {hops} = this.props

     return (
     <div>
       <HopDetail hops={hops} activeItem={this.state.clickedItem} handleClick={this.handleClick}/>
     </div>
    )
  }
}

function mapStateToProps(state) {
  return {
  hops: state.hops
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectHops, fetchHops }, dispatch)
}
  
export default connect(mapStateToProps, mapDispatchToProps)(HopsList);


