import { PeliculasPage } from './app.po';

describe('peliculas App', () => {
  let page: PeliculasPage;

  beforeEach(() => {
    page = new PeliculasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
