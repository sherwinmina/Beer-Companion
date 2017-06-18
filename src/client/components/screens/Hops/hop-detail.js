import React, { Component } from 'react';
import { connect } from 'react-redux';


class HopDetail extends Component{
  render() {
    if (!this.props.hop) {
      return <div>select Hops for details</div>
    }

    return (
      <div>
        <h5>Details for:</h5>
        <h5>{this.props.hop.name}</h5>
        <div>{this.props.hop.description}</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    hop: state.activeHop
  };
}

export default connect(mapStateToProps)(HopDetail);