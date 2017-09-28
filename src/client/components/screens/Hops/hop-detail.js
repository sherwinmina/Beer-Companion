import React, { Component } from 'react';
import { connect } from 'react-redux';
 import './hop-details.scss';

const HopDetail = (props) => {
  const { hops, handleClick, activeItem } = props;

  let list = hops.map(item => {
    return <div key={item.id}>
        <h5 className="hops-name" onClick={handleClick}>
          {item.name}
        </h5>
      </div>;
  });

let description = hops.map(item => {
  if (item.name === props.activeItem) 
    return <div key={item.id}>
        <h4 className="card-name">{item.name}</h4>
        <p>{item.description}</p>
        <h5>{item.alphaAcidMin}</h5>
        <h5>{item.country.name}</h5>
        <h5>{item.betaAcidMin}</h5>
      </div>;
});
 
  return <div className="container-hop-details">
      <div className="list-container">
        <div>{list}</div>
      </div>
      <div className="item-card">
        <div>{activeItem === null ? <div>Click the list of hops for more info</div> :description}</div>
      </div>
    </div>;

}




export default HopDetail;