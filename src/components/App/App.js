import React, {Component} from 'react';
import Board from '../Board';
import s from './App.scss';

class App extends Component {
  render() {
    return (
      <div data-hook="app" className={s.root}>
        <Board/>
        <div data-hook="winner-message">{'X wins!'}</div>
      </div>
    );
  }
}

export default App;
