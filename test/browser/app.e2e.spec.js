import {AppDriver} from './drivers/app.driver';
import {expect} from 'chai';
import {beforeAndAfter} from '../environment';

let appDriver;

describe('React application', () => {
  beforeAndAfter();

  beforeEach(async () => {
    appDriver = new AppDriver();
  });

  afterEach(() => {
    appDriver.close();
  });

  it('should display two buttons', async () => {
    await appDriver.navigate();
    const title = await appDriver.getTitle();
    expect(await title.getText()).to.eq('Hello World!');
  });
});
