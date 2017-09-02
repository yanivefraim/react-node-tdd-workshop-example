import React, {Component} from 'react';
import s from './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {board: [['', '', ''], ['', '', ''], ['', '', '']]};
  }

  cellClicked(rowI, cellI) {
    const board = this.state.board.map((row, rowIndex) =>
      rowIndex !== rowI ? row : row.map((cell, cellIndex) =>
        cellIndex !== cellI ? cell : 'X'));
    this.setState({board});
  }

  render() {
    return (
      <div data-hook="app" className={s.root}>
        <table>
          <tbody>
            {this.state.board.map((row, rowIndex) =>
              <tr key={rowIndex}>{row.map((cell, cellIndex) =>
                <td className={'cell'} key={cellIndex} onClick={() => this.cellClicked(rowIndex, cellIndex)}>{cell}</td>)}
              </tr>)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
