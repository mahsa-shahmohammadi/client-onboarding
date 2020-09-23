
import { browser, logging } from 'protractor';
import { ReviewsPage } from './review.po';

describe('workspace-project App', () => {
  let page: ReviewsPage;

  beforeEach(() => {
    page = new ReviewsPage();
  });

  it('should display review step', () => {
    page.navigateTo();
    expect(page.getAddressStepTitleText()).toEqual('Review Details');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
