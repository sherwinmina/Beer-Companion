import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import promise from 'redux-promise';
import reducers from './reducers';
import App from './components/app'

const enhancer = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);
const createStoreWithMiddleware = applyMiddleware(
  promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers, enhancer)}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.entry'));
