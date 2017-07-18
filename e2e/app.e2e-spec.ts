import { AngularCopDemoPage } from './app.po';

describe('angular-cop-demo App', () => {
  let page: AngularCopDemoPage;

  beforeEach(() => {
    page = new AngularCopDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
