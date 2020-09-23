import { DetailApp as DetailPage } from './detail.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: DetailPage;

  beforeEach(() => {
    page = new DetailPage();
  });

  it('should display details step', () => {
    page.navigateTo();
    expect(page.getDetailsStepTitleText()).toEqual('Basic Details');
  });

  it('should display required error after touch firstName', () => {
    expect(page.getFirstNameError()).toEqual('Error: First Name is required');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
