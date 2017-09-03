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

describe('App', () => {
  afterEach(() => wrapper.detach());

  it('should print "X" and "O" interchangeably', () => {
    render();
    clickCellAt(0);
    clickCellAt(1);
    expect(getCellTextAt(0)).to.equal('X');
    expect(getCellTextAt(1)).to.equal('O');
  });
});
