import { ColorKeysPrintingPage } from './app.po';

describe('color-keys-printing App', function() {
  let page: ColorKeysPrintingPage;

  beforeEach(() => {
    page = new ColorKeysPrintingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
