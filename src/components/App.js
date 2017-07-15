import React, {Component} from 'react';
import CharacterList from './CharacterList';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render(){
    return(
      <div className="App">
        <h3>SuperSquad</h3>
        <CharacterList/>
      </div>
    )
  }
}
