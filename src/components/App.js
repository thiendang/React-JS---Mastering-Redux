import React, {Component} from 'react';
import CharacterList from './CharacterList';
import HeroList from './HeroList';
import SquadStats from './SquadStats';

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
        <div className="col-md-4">
          <CharacterList/>
        </div>
        <div className="col-md-4">
          <HeroList/>
        </div>
        <div className="col-md-4">
          <SquadStats/>
        </div>
      </div>
    )
  }
}
