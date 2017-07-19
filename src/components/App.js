import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchRecipes from './SearchRecipes';
import RecipeList from './RecipeList';
import FavoriteRecipeList from './FavoriteRecipeList';

class App extends Component {
  render(){
    return(
      <div>
        <h2>Recipe Finder</h2>
        <SearchRecipes/>
        <RecipeList/>
      </div>
    )
  }
}
export default App;
