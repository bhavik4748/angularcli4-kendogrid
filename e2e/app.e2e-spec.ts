import { Angular4CliPage } from './app.po';
import { browser, element, by } from 'protractor';


describe('angular4-cli App', () => {
  let page: Angular4CliPage;

  beforeEach(() => {
    page = new Angular4CliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    //  expect(page.getParagraphText()).toEqual('app works!');
    expect(page).toBeTruthy();
  });

  it('should display title as Angular4Cli Sample App', () => {
    page.navigateTo();
    // expect(page).toBeTruthy();
    //  expect(page.navigateTo().getTitle()).toEqual('Angular4Cli Sample App');
    expect(browser.getTitle()).toEqual('Angular4Cli Sample App');
  });

  it('should display login link in app component', () => {
    page.navigateTo();
    var goButton = element(by.id('appLoginLink')).getText();
    expect(goButton).toEqual('Login');
  });

  it('should redirect to login page on clicking login link', async function (): Promise<any> {
    page.navigateTo();
    var loginButton = element(by.id('appLoginLink'));
    loginButton.click();
    var loginUserNameLabel = await element(by.id('lblLoginUserName')).getText();
    expect(loginUserNameLabel).toEqual('Username');
  });

  it('should redirect to dashboard page on clicking Submit button on login page', async function (): Promise<any> {
    page.navigateTo();
    var loginButton = element(by.id('appLoginLink'));
    loginButton.click();
    var loginUserNameLabel = await element(by.id('lblLoginUserName')).getText();
    var loginSubmitButton = element(by.id('loginSubmitButton'));
    loginSubmitButton.click();
    var appPortalLink = await element(by.id('appPortalLink')).getText();
    expect(appPortalLink).toEqual('Portal');
  });


  it('should redirect to portal page on clicking portal link on Dashboard page', async function (): Promise<any> {
    page.navigateTo();
    var loginButton = element(by.id('appLoginLink'));
    loginButton.click();
    var loginUserNameLabel = await element(by.id('lblLoginUserName')).getText();
    var loginSubmitButton = element(by.id('loginSubmitButton'));
    loginSubmitButton.click();
    var appPortalLink = await element(by.id('appPortalLink'));
    appPortalLink.click();
    var planworkpage = await element(by.id('plan-work-page')).getText();
    expect(planworkpage).toEqual('plan-work works!');
  });


});
