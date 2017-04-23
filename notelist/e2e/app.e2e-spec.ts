import { NotelistPage } from './app.po';

describe('notelist App', function() {
  let page: NotelistPage;

  beforeEach(() => {
    page = new NotelistPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
