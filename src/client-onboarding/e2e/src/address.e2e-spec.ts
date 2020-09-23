import { AddressPage } from './address.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AddressPage;

  beforeEach(() => {
    page = new AddressPage();
  });

  it('should display address step', () => {
    page.navigateTo();
    expect(page.getAddressStepTitleText()).toEqual('Address Details');
  });

  it('should display required error after touch Addres Line 1', () => {
    page.navigateTo();
    expect(page.getAddressLine1Error()).toEqual('Error:  Address Line 1 is required');
  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
