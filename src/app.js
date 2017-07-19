import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducers from './reducers';

import App from './components/App.js';
import css from './app.scss';

const store = createStore(rootReducers);
store.subscribe(() => console.log('store', store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  ,document.getElementById('root')
)
