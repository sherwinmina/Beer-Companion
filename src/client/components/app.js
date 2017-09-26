import React, { Component } from 'react';
import { Row } from 'react-materialize';
import Routes from './Routes'
import Header from "./Header";

const App = ()  =>{
  return (
    <div>
      <Header/>
      <div>
      <Routes/>
      </div>
    </div>
  );
}

export default App;

