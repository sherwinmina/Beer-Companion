import React, { Component } from 'react'
import {Link} from 'react-router';
import { connect } from 'react-redux';
import {Collapsible, CollapsibleItem, Row, Col, Collection, CollectionItem } from 'react-materialize';
import axios from 'axios';

import HopDetail from './hop-detail';
import { selectHops } from '../../../actions';
import { bindActionCreators } from 'redux';


class Hops extends Component { 
  renderList() {
    return this.props.hops.map((hop) => {
      return (
        <CollectionItem
          key={hop.name}
          onClick ={() => this.props.selectHops(hop)}
          className="list-group-item">
          {hop.name}
        </CollectionItem>
      );
    });
  }

  render() {
    return (
      <Row>
        <Col s={4}> 
          <h5>List of Hops</h5>
          <Collection>{this.renderList()}</Collection>
        </Col>
        
        <Col s={8}> 
           <HopDetail/>
        </Col>
       
      </Row>
    );
  }
}


function mapStateToProps(state) {
  return {
  hops: state.hops
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectHops }, dispatch)
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Hops);