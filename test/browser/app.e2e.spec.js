import {expect} from 'chai';
import 'babel-polyfill';
import {beforeAndAfter} from '../environment';
import puppeteer from 'puppeteer';
import {testBaseUrl} from '../test-common';

let browser, page;
const navigate = (url = '') => page.goto(`${testBaseUrl}${url}`);
const getCellTextAt = async index => (await page.$$('[data-hook=cell]'))[index].evaluate(elem => elem.innerText);
const clickCellAt = async index => (await page.$$('[data-hook=cell]'))[index].click();
const isWinnerMessageVisible = () => page.$('[data-hook="winner-message"]') === null;
const getWinnerMessageText = () => page.$eval('[data-hook="winner-message"]', elem => elem.innerText);
const getNextPlayerName = () => page.$eval('.next', elem => elem.innerText);

describe('React application', () => {
  beforeAndAfter();

  before(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  after(() => {
    browser.close();
  });

  it('should draw "X" when first user plays', async () => {
    await navigate();
    expect(await getCellTextAt(0)).to.eql('');
    await clickCellAt(0);
    expect(await getCellTextAt(0)).to.eql('X');
  });

  it('user "X" should win', async () => {
    await navigate();
    await clickCellAt(0);
    await clickCellAt(3);
    expect(await isWinnerMessageVisible()).to.equal(false);
    await clickCellAt(1);
    await clickCellAt(4);
    await clickCellAt(2);
    expect(await getWinnerMessageText()).to.equal('X wins!');
  });

  it('should show next player after each click', async () => {
    await navigate();
    expect(await getNextPlayerName()).to.equal('X');
    await clickCellAt(3);
    expect(await getNextPlayerName()).to.equal('O');
    await clickCellAt(2);
    expect(await getNextPlayerName()).to.equal('X');
  });
});
