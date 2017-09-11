import React from 'react';
import {expect} from 'chai';
import {mount} from 'enzyme';
import App from './App';

let wrapper;
const clickCellAt = index => wrapper.find('[data-hook="cell"]').at(index).simulate('click');
const getCellTextAt = index => wrapper.find('[data-hook="cell"]').at(index).text();
const render = () => wrapper = mount(
  <App/>, {attachTo: document.createElement('div')}
);
const getWinnerMessageText = () => wrapper.find('[data-hook="winner-message"]').text();
const getXPlayerWins = () => wrapper.find('[data-hook="x-win-count"]').text();
const getOPlayerWins = () => wrapper.find('[data-hook="o-win-count"]').text();
const makeOWin = () => {
  clickCellAt(3);
  clickCellAt(0);
  clickCellAt(4);
  clickCellAt(1);
  clickCellAt(6);
  clickCellAt(2);
};
const makeXWin = () => {
  clickCellAt(0);
  clickCellAt(4);
  clickCellAt(1);
  clickCellAt(6);
  clickCellAt(2);
};

const makeATie = () => {
  clickCellAt(3);
  clickCellAt(0);
  clickCellAt(4);
  clickCellAt(5);
  clickCellAt(1);
  clickCellAt(2);
  clickCellAt(6);
  clickCellAt(7);
  clickCellAt(8);
};

const clickNewGame = () => wrapper.find('[data-hook="new-game"]').simulate('click');

describe('App', () => {
  afterEach(() => wrapper.detach());

  it('should print "X" and "O" interchangeably', () => {
    render();
    clickCellAt(0);
    clickCellAt(1);
    expect(getCellTextAt(0)).to.equal('X');
    expect(getCellTextAt(1)).to.equal('O');
  });

  it('user "O" should win', () => {
    render();
    makeOWin();
    expect(getWinnerMessageText()).to.equal('O wins!');
  });

  it('should have a tie', async () => {
    render();
    makeATie();
    expect(getWinnerMessageText()).to.equal('it is a tie!');
  });

  it('should not be able to press a non empty cell', () => {
    render();
    clickCellAt(3);
    clickCellAt(3);
    expect(getCellTextAt(3)).to.equal('X');
  });

  it('should show number of winning for each player', () => {
    render();
    expect(getOPlayerWins()).to.equal('0');
    makeOWin();
    expect(getOPlayerWins()).to.equal('1');
    clickNewGame();
    makeXWin();
    expect(getXPlayerWins()).to.equal('1');
    clickNewGame();
    makeOWin();
    expect(getOPlayerWins()).to.equal('2');
  });

  it('should not add win count for tie', () => {
    render();
    makeATie();
    expect(getOPlayerWins()).to.equal('0');
    expect(getXPlayerWins()).to.equal('0');
  });
});
