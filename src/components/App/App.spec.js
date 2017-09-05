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
    clickCellAt(3);
    clickCellAt(0);
    clickCellAt(4);
    clickCellAt(1);
    clickCellAt(6);
    clickCellAt(2);
    expect(getWinnerMessageText()).to.equal('O wins!');
  });

  it('should have a tie', async () => {
    render();
    clickCellAt(3);
    clickCellAt(0);
    clickCellAt(4);
    clickCellAt(5);
    clickCellAt(1);
    clickCellAt(2);
    clickCellAt(6);
    clickCellAt(7);
    clickCellAt(8);
    expect(getWinnerMessageText()).to.equal('it is a tie!');
  });
});
