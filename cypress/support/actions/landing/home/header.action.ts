import {HeaderRepo} from "../../../repositories";
const header = new HeaderRepo();
export class HeaderAction {
    constructor() {
    }
    clickLogo = () => header.logo().click({force: true});
    openCourses = () => header.course().click({force: true});
    openBlog = () => header.blog().click({force: true});
    openStd = () => header.stdLink().click({force: true});
}