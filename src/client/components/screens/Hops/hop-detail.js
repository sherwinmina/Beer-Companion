import React, { Component } from 'react';
import { connect } from 'react-redux';


const HopDetail = (props) => {
    
    const { name, notes, alpha, beta , origin, substitutes} = props;
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



export default HopDetail;