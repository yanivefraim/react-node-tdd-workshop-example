import webdriver from 'selenium-webdriver';
const chrome = require('selenium-webdriver/chrome');
const path = require('chromedriver').path;

export class AppDriver {
  constructor() {
    const service = new chrome.ServiceBuilder(path).build();
    chrome.setDefaultService(service);

    this.driver = new webdriver.Builder()
      .forBrowser('chrome')
      .withCapabilities(webdriver.Capabilities.chrome())
      .build();
  }

  navigate(path = '/') {
    this.driver.get(`http://localhost:3100${path}`);
    return this.driver.wait(() => webdriver.until.titleIs('Wix Full Stack Project Boilerplate'));
  }

  getTitle() {
    return this.driver.findElement(webdriver.By.css('h2'));
  }

  close() {
    this.driver.quit();
  }
}
