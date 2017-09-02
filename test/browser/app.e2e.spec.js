import {expect} from 'chai';
import 'babel-polyfill';
import {beforeAndAfter} from '../environment';
import puppeteer from 'puppeteer';
import {testBaseUrl} from '../test-common';

describe('React application', () => {
  let browser, page;
  beforeAndAfter();

  before(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  after(() => {
    browser.close();
  });

  it('should draw "X" when first user plays', async () => {
    await page.goto(testBaseUrl);
    const cells = await page.$$('.cell');
    await cells[0].click();
    expect(await cells[0].evaluate(elem => elem.innerText)).to.eql('X');
  });
});
