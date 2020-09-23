import { browser, by, element } from 'protractor';

export class AddressPage {
  navigateTo(): Promise<unknown> {
    return browser.get(`${browser.baseUrl}/index/address`) as Promise<unknown>;
  }

  getAddressStepTitleText(): Promise<string> {
    return element(by.tagName('h3')).getText() as Promise<string>;
  }

  touchAddressesInput(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      element(by.id('addressLine1-formField')).element(by.tagName('input')).click().then(_ => {
        element(by.id('addressLine2-formField')).element(by.tagName('input')).click().then(_ => {
          resolve();
        });
      });
    });
  }

  async getAddressLine1Error(): Promise<string> {
    await this.touchAddressesInput();
    return element(by.id('addressLine1-formField')).element(by.name('kendo-formerror')).getText();
  }
}
