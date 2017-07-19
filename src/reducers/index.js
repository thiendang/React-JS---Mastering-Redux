import {SET_RECIPES} from '../actions';
import {combineReducers} from 'redux';

function Recipes(state = [], action) {
  switch (action.type) {
    case SET_RECIPES:
      return action.items;
    default:
      return state;
  }
}

const rootReducers = combineReducers({Recipes});

export default rootReducers;
