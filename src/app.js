import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducers from './reducers';

import App from './components/App.js';
import css from './app.scss';
import {addCharacterById} from './actions';

const store = createStore(rootReducers);
console.log(store.getState());
store.subscribe(() => console.log('store ', store.getState()));
store.dispatch(addCharacterById(2));

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  ,document.getElementById('root')
)
