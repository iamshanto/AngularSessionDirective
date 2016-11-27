import { DirectiveSessionPage } from './app.po';

describe('directive-session App', function() {
  let page: DirectiveSessionPage;

  beforeEach(() => {
    page = new DirectiveSessionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
