import {combineReducers} from 'redux';
import characters from './characters_reducer';
import heroes from './heroes_reducer';

const rootReducers = combineReducers({
  characters,
  heroes
})

export default rootReducers;
