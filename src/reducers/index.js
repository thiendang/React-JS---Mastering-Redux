import {SET_RECIPES, FAVORITE_RECIPES} from '../actions';
import {combineReducers} from 'redux';

function Recipes(state = [], action) {
  switch (action.type) {
    case SET_RECIPES:
      return action.items;
    default:
      return state;
  }
}

function favoriteRecipes(state = [], action) {
  switch (action.type) {
    case FAVORITE_RECIPES:
      state = [...state, action.recipe]
      return state;
    default:
      return state;
  }
}

const rootReducers = combineReducers({Recipes, favoriteRecipes});

export default rootReducers;
