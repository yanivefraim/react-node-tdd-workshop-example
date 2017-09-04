import {expect} from 'chai';
import {getGameStatus} from './Board';

describe('getGameStatus', () => {
  it('"X" should win', () => {
    const symbol = 'X';
    const board = [[symbol, symbol, symbol],
                   ['', '', ''],
                   ['', '', '']];
    expect(getGameStatus(board)).to.equal(symbol);
  });

  it('"O" should win', () => {
    const symbol = 'O';
    const board = [[symbol, symbol, symbol],
                   ['', '', ''],
                   ['', '', '']];
    expect(getGameStatus(board)).to.equal(symbol);
  });

  it('"X" should win for second line', () => {
    const symbol = 'X';
    const board = [['', '', ''],
                   [symbol, symbol, symbol],
                   ['', '', '']];
    expect(getGameStatus(board)).to.equal(symbol);
  });

  it('"X" should win for second line', () => {
    const symbol = 'X';
    const board = [['', '', ''],
                   ['', '', ''],
                   [symbol, symbol, symbol]];
    expect(getGameStatus(board)).to.equal(symbol);
  });

  it('"X" should win for column', () => {
    const symbol = 'X';
    const board = [[symbol, '', ''],
                   [symbol, '', ''],
                   [symbol, '', '']];
    expect(getGameStatus(board)).to.equal(symbol);
  });

  it('"X" should win for first diagonal', () => {
    const symbol = 'X';
    const board = [[symbol, '', ''],
                   ['', symbol, ''],
                   ['', '', symbol]];
    expect(getGameStatus(board)).to.equal(symbol);
  });

  it('"X" should win for second diagonal', () => {
    const symbol = 'X';
    const board = [['', '', symbol],
                   ['', symbol, ''],
                   [symbol, '', '']];
    expect(getGameStatus(board)).to.equal(symbol);
  });
});
