import React from 'react';
import {Players} from './../api/players';

//exports for use globally
export default class AddPlayer extends React.Component {
  handleSubmit(e) {
    // variable playerName is equal to playName on submit form
    let playerName = e.target.playerName.value;
    //prevents full page refresh on submit
    e.preventDefault();

    if (playerName) {
      //clears out value
      e.target.playerName.value = '';
      // Insert new doc into collection
      Players.insert({
        name: playerName,
        score: 0
      });
    }
  }

  render() {
    return (
      <div>
        {/*Manually preserve binding of this to reference object*/}
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" name="playerName" placeholder="Player name"/>
          <button>Add Player</button>
        </form>
      </div>
    );
  }
}
