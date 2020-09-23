import { browser, by, element } from 'protractor';

export class ReviewsPage {
  navigateTo(): Promise<unknown> {
    return browser.get(`${browser.baseUrl}/index/review`) as Promise<unknown>;
  }

  getAddressStepTitleText(): Promise<string> {
    return element(by.tagName('h3')).getText() as Promise<string>;
  }
}
