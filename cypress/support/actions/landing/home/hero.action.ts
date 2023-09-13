import {HeroRepo} from "../../../repositories";
const hero = new HeroRepo();

export class HeroAction {
    openCourses = () => hero.coursesLink().click({force: true});
}