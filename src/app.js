import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import App from './components/App.js';
import css from './app.scss';

ReactDOM.render(
    <App/>
  ,document.getElementById('root')
)
