import React, {Component} from 'react';
import {connect} from 'react-redux';

class CharacterList extends Component {
  render(){
    return(
      <div>
        <h4>CharacterList</h4>
        <ul>
          {
            this.props.characters.map(character => {
              return(
                <li key={character.id}>{character.name}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    characters: state.characters
  };
}

export default connect(mapStateToProps, null)(CharacterList);
