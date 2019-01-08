import { CourseModulePage } from './app.po';

describe('course-module App', () => {
  let page: CourseModulePage;

  beforeEach(() => {
    page = new CourseModulePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
