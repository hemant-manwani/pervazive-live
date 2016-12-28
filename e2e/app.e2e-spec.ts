import { PervazivePage } from './app.po';

describe('pervazive App', function() {
  let page: PervazivePage;

  beforeEach(() => {
    page = new PervazivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
