import React, {Component} from 'react';
import CharacterList from './CharacterList';
import HeroList from './HeroList';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render(){
    return(
      <div className="App">
        <h2>SuperSquad</h2>
        <div className="col-md-6">
          <CharacterList/>
        </div>
        <div className="col-md-6">
          <HeroList/>
        </div>
      </div>
    )
  }
}
