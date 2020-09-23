import { browser, by, element } from 'protractor';

export class DetailApp {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getDetailsStepTitleText(): Promise<string> {
    return element(by.tagName('h3')).getText() as Promise<string>;
  }

  touchFirstNameInput(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      element(by.id('firstName-formField')).element(by.tagName('input')).click().then(_ => {
        element(by.id('lastName-formField')).element(by.tagName('input')).click().then(_ => {
          resolve();
        });
      });
    });
  }

  async getFirstNameError(): Promise<string> {
    await this.touchFirstNameInput();
    return element(by.id('firstName-formField')).element(by.name('kendo-formerror')).getText();
  }
}
