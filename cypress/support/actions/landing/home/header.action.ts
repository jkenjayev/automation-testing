import { headerRepo } from "../../../repositories";

export class HeaderAction {
  clickLogo = () => headerRepo.logo().click({ force: true });
  openCourses = () => headerRepo.course().click({ force: true });
  openBlog = () => headerRepo.blog().click({ force: true });
  openStd = () => headerRepo.stdLink().click({ force: true });
}

export const headerAction: HeaderAction = new HeaderAction();