import { MyCarsFirebasePage } from './app.po';

describe('my-cars-firebase App', () => {
  let page: MyCarsFirebasePage;

  beforeEach(() => {
    page = new MyCarsFirebasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
