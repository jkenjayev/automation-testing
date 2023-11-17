import { heroRepo } from "../../../repositories";

export class HeroAction {
  openCourses = () => heroRepo.coursesLink().click({ force: true });
}

export const heroAction: HeroAction = new HeroAction();