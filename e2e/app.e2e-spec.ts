import { AngularTryoutPage } from './app.po';

describe('angular-tryout App', function() {
  let page: AngularTryoutPage;

  beforeEach(() => {
    page = new AngularTryoutPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
