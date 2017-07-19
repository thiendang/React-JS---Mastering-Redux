import React, {Component} from 'react';
import {Form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import setRecipes from '../actions';

class SearchRecipes extends Component {
  constructor(){
    super();
    this.state = {
      ingredients: '',
      dish: ''
    }
  }
  search = () => {
    let {ingredients, dish} = this.state;
    const url = `http://www.recipepuppy.com/api/?=${ingredients}&q=${dish}`;
    // console.log('state', this.state, 'url', url);
    fetch(url, {
      method: 'GET'
    })
    .then(res => res.json())
    .then(json => console.log('recipes', json));
  }
  render(){
    return(
      <Form inline>
        <FormGroup>
          <ControlLabel>Ingredients</ControlLabel>
          {' '}
          <FormControl onChange={event => this.setState({ingredients: event.target.value})} type="text" placeholder="garlic, chicken"/>
        </FormGroup>
        {' '}
        <FormGroup>
          <ControlLabel>Dish</ControlLabel>
          {' '}
          <FormControl onChange={event => this.setState({dish: event.target.value})} type="text" placeholder="adobo"/>
        </FormGroup>
        {' '}
        <Button onClick={this.search}>Submit</Button>
      </Form>
    )
  }
}

export default connect(null, {setRecipes})(SearchRecipes);
