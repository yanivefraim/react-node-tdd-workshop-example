import React, {Component} from 'react';
import Board from '../Board';
import Players from '../Players';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {winner: '', nextPlayer: 'X'};
  }

  getWinnerMessage() {
    return this.state.winner !== '-' ? `${this.state.winner} wins!` : 'it is a tie!';
  }
  render() {

    return (
      <div data-hook="app" className={'root'}>
        <Players nextPlayer={this.state.nextPlayer}/>
        <Board onGameOver={winner => this.setState({winner})} onCellClicked={nextPlayer => this.setState({nextPlayer})}/>
        {this.state.winner && <div data-hook="winner-message">{this.getWinnerMessage()}</div>}
      </div>
    );
  }
}

export default App;
