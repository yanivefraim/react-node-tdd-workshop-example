import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {getGameStatus} from '../../gameService';

class Board extends Component {
  constructor() {
    super();
    this.state = {board: [['', '', ''], ['', '', ''], ['', '', '']], nextPlayer: 'X'};
  }

  getUpdatedBoardState({board, nextPlayer, rowI, cellI}) {
    return board.map((row, rowIndex) =>
    rowIndex !== rowI ? row : row.map((cell, cellIndex) =>
      cellIndex !== cellI ? cell : nextPlayer));
  }

  cellClicked(rowI, cellI) {
    if (this.state.board[rowI][cellI]) {
      return;
    }
    const board = this.getUpdatedBoardState({board: this.state.board, nextPlayer: this.state.nextPlayer, rowI, cellI});
    const gameStatus = getGameStatus(board);
    if (gameStatus) {
      this.props.onGameOver(gameStatus);
    }
    const newNextPlayer = this.state.nextPlayer === 'X' ? 'O' : 'X';
    this.props.onCellClicked(newNextPlayer);
    this.setState({board, nextPlayer: newNextPlayer});
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
  onGameOver: PropTypes.func,
  onCellClicked: PropTypes.func
};

export default Board;
