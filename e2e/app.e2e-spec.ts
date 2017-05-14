import { RandomsPage } from './app.po';

describe('randoms App', () => {
  let page: RandomsPage;

  beforeEach(() => {
    page = new RandomsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
