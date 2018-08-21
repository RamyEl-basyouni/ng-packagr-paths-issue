import { ONTrackPage } from './app.po';

describe('ontrack App', () => {
  let page: ONTrackPage;

  beforeEach(() => {
    page = new ONTrackPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
