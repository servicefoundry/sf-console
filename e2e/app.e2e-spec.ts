import { SfConsolePage } from './app.po';

describe('sf-console App', function() {
  let page: SfConsolePage;

  beforeEach(() => {
    page = new SfConsolePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
