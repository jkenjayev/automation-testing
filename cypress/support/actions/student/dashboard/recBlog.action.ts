import {RecBlogRepo} from "../../../repositories";
const {recBlogLink} = new RecBlogRepo();
export class RecBlogAction {
	openRecBlog = () => recBlogLink().click({force: true});
}