import React, { Component } from 'react';
import {connect } from 'react-redux';
import { fetchYeast } from '../../actions';

class Yeast extends Component {
  componentDidMount() {
    this.props.fetchYeast();
  }

  render () {
    console.log(this.props.yeast)
    return (
      <div>
        <h1>Yeast</h1>
        <p>These are the list of yeast</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    yeast: state.yeast
  }
}

export default connect(mapStateToProps, {fetchYeast})(Yeast);