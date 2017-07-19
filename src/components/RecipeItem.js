import React, {Component} from 'react';
import {connect} from 'react-redux';

class RecipeItem extends Component {
  render(){
    let {recipe} = this.props;
    return(
      <div className="recipe-item">
        <div className="recipe-text">
          <a href={recipe.href} target='blank'>
            <h4>{recipe.title}</h4>
          </a>
          <p>{recipe.ingredients}</p>
        </div>
          <img className="recipe-img" src={recipe.thumbnail} alt={recipe.title} />
      </div>
    )
  }
}

export default RecipeItem;
