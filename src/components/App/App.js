import React, {Component} from 'react';
import Board from '../Board';
import s from './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {winner: ''};
  }

  getWinnerMessage() {
    return this.state.winner !== '-' ? `${this.state.winner} wins!` : 'it is a tie!';
  }
  render() {
    return (
      <div data-hook="app" className={s.root}>
        <Board onGameOver={winner => this.setState({winner})}/>
        {this.state.winner && <div data-hook="winner-message">{this.getWinnerMessage()}</div>}
      </div>
    );
  }
}

export default App;
