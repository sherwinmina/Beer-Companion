import React, { Component } from 'react';
import { connect } from 'react-redux';


const HopDetail = (props) => {
    if (!props[name]) {
      return <div>Click the list to get more info</div>
    }

    const { name, notes, alpha, beta , origin, substitutes} = props[name];
    
    return (
      <div>
        <h5>{name}</h5>
        <div><b>Origin:</b> {origin}</div>
        <span>alpha: {alpha}</span> <span>beta: {beta}</span>
        <div>{notes}</div>
        <div><b>Substitues:</b> {substitutes}</div>
      </div>
    )
}

function mapStateToProps(state) {
  return {
    hop: state.activeHop
  };
}

export default connect(mapStateToProps)(HopDetail);