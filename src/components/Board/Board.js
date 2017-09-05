import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {getGameStatus} from '../../gameService';

class Board extends Component {
  constructor() {
    super();
    this.state = {board: [['', '', ''], ['', '', ''], ['', '', '']], currentPlayer: 'O'};
  }

  cellClicked(rowI, cellI) {
    const currentPlayer = this.state.currentPlayer === 'X' ? 'O' : 'X';
    const board = this.state.board.map((row, rowIndex) =>
      rowIndex !== rowI ? row : row.map((cell, cellIndex) =>
        cellIndex !== cellI ? cell : currentPlayer));

    const gameStatus = getGameStatus(board);
    if (gameStatus) {
      this.props.onGameOver(gameStatus);
    }
    this.setState({board, currentPlayer});
  }

  render() {
    return (<table>
      <tbody>
        {this.state.board.map((row, rowIndex) =>
          <tr key={rowIndex}>{row.map((cell, cellIndex) =>
            <td data-hook="cell" key={cellIndex} onClick={() => this.cellClicked(rowIndex, cellIndex)}>{cell}</td>)}
          </tr>)}
      </tbody>
    </table>);
  }
}

Board.propTypes = {
  onGameOver: PropTypes.func
};

export default Board;
