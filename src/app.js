import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducers from './reducers';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import App from './components/App.js';
import css from './app.scss';
import FavoriteRecipeList from './components/FavoriteRecipeList';

const store = createStore(rootReducers);
store.subscribe(() => console.log('store', store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={App}/>
        <Route path='/favorites' component={FavoriteRecipeList}/>
      </Switch>
    </BrowserRouter>
  </Provider>
  ,document.getElementById('root')
)
