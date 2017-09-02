import {expect} from 'chai';
import 'babel-polyfill';
import {beforeAndAfter} from '../environment';
import puppeteer from 'puppeteer';
import {testBaseUrl} from '../test-common';

let browser, page;
const navigate = (url = '') => page.goto(`${testBaseUrl}${url}`);
const getCellTextAt = async index => (await page.$$('[data-hook=cell]'))[index].evaluate(elem => elem.innerText);
const clickCellAt = async index => (await page.$$('[data-hook=cell]'))[index].click();

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
});
