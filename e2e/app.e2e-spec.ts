import { NativescriptGuiEditorPage } from './app.po';

describe('nativescript-gui-editor App', function() {
  let page: NativescriptGuiEditorPage;

  beforeEach(() => {
    page = new NativescriptGuiEditorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
