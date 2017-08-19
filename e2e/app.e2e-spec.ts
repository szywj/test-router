import { TestRouterPage } from './app.po';

describe('test-router App', () => {
  let page: TestRouterPage;

  beforeEach(() => {
    page = new TestRouterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
