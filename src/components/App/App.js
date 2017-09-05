import React, {Component} from 'react';
import classNames from 'classnames';
import Board from '../Board';

class App extends Component {
  constructor() {
    super();
    this.state = {winner: '', nextPlayer: 'X'};
  }

  getWinnerMessage() {
    return this.state.winner !== '-' ? `${this.state.winner} wins!` : 'it is a tie!';
  }
  render() {
    const classNameX = classNames('player', {
      next: this.state.nextPlayer === 'X'
    });
    const classNameO = classNames('player', {
      next: this.state.nextPlayer === 'O'
    });
    return (
      <div data-hook="app">
        <div>
          <span className={classNameX}>{'X'}</span>
          <span className={classNameO}>{'O'}</span>
        </div>
        <Board onGameOver={winner => this.setState({winner})} onCellClicked={nextPlayer => this.setState({nextPlayer})}/>
        {this.state.winner && <div data-hook="winner-message">{this.getWinnerMessage()}</div>}
      </div>
    );
  }
}

export default App;
