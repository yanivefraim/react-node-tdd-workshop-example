import React, {Component} from 'react';
import Board from '../Board';
import Players from '../Players';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {winner: '', nextPlayer: 'X', winCount: {x: 0, o: 0}};
  }

  onGameOver(winner) {
    const winCount = this.state.winCount;
    if (winner === 'X') {
      winCount.x++;
    } else if (winner === 'O') {
      winCount.o++;
    }
    this.setState({winner, winCount});
  }

  onNewGame() {
    this.board.newGame();
    this.setState({winner: '', nextPlayer: 'X'});
  }

  getWinnerMessage() {
    return this.state.winner !== '-' ? `${this.state.winner} wins!` : 'it is a tie!';
  }
  render() {

    return (
      <div data-hook="app" className={'root'}>
        <Players nextPlayer={this.state.nextPlayer} winCount={this.state.winCount}/>
        <Board ref={board => this.board = board} onGameOver={winner => this.onGameOver(winner)} onCellClicked={nextPlayer => this.setState({nextPlayer})}/>
        {this.state.winner && <div data-hook="winner-message">{this.getWinnerMessage()}</div>}
        <button data-hook="new-game" onClick={() => this.onNewGame()}>{'New Game'}</button>
      </div>
    );
  }
}

export default App;
