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

  navigate(path = 'http://localhost:3100') {
    this.driver.get(path);
    return this.driver.wait(() => webdriver.until.titleIs('Wix Full Stack Project Boilerplate'));
  }

  sleep() {
    return this
      .driver
      .wait(() => new Promise(resolve => setTimeout(resolve, 20000)), 30000);
  }

  getButtons() {
    return this.driver.findElements(webdriver.By.css('button'));
  }

  getTitle() {
    return this.driver.findElement(webdriver.By.css('h2'));
  }

  close() {
    this.driver.quit();
  }
}
