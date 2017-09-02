import React, {Component} from 'react';
import Board from '../Board';
import s from './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {winner: ''};
  }
  render() {
    return (
      <div data-hook="app" className={s.root}>
        <Board onGameOver={() => this.setState({winner: 'X'})}/>
        {this.state.winner && <div data-hook="winner-message">{'X wins!'}</div>}
      </div>
    );
  }
}

export default App;
