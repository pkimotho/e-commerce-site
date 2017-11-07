import { Angular4firebasePage } from './app.po';

describe('angular4firebase App', () => {
  let page: Angular4firebasePage;

  beforeEach(() => {
    page = new Angular4firebasePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
