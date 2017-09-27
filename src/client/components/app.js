import React, { Component } from 'react';
import { Row } from 'react-materialize';
import Routes from './Routes'
import Header from "./Header";

import '../styles/App.scss'

const App = ()  =>{
  return <div className="app-container">
      <div className="header-container">
        <Header />
      </div>

      <div className="content-container">
        <Routes />
      </div>
    </div>;
}

export default App;

