import React, {Component} from 'react';
import {Form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';

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
    console.log('state', this.state, 'url', url);
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

export default SearchRecipes;
