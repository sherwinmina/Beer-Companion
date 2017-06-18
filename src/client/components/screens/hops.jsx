import React, { Component } from 'react'
import {Link} from 'react-router';
import { connect } from 'react-redux';
import {Collapsible, CollapsibleItem} from 'react-materialize';
import axios from 'axios';
import _ from 'lodash';

import { selectHops } from '../../actions';
import { bindActionCreators } from 'redux';


class Hops extends Component {
  
  renderList() {
    return this.props.hops.map((hop) => {
      return (
        <li
          key={hop.name}
          onClick ={() => this.props.selectHops(hop)}
          className="list-group-item">
          {hop.name}
        </li>
      );
    });
  }


  render() {
    return (
      <div>
        <h1>Hello</h1>
        {this.renderList()}
      </div>
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