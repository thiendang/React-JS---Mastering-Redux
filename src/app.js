import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import characters from './reducers';

import App from './components/App.js';
import css from './app.scss';

const store = createStore(characters);
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  ,document.getElementById('root')
)
