/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import allReducers from './reducers';
import thunk from 'redux-thunk';
import 'react-notifications/lib/notifications.css';
import { composeWithDevTools } from 'redux-devtools-extension';

import ScrollToTop from './ScrollToTop';

const store = createStore(
  allReducers, composeWithDevTools(
  applyMiddleware(thunk),
  ));
 

ReactDOM.render(
  <Provider store ={store}>
    <BrowserRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
