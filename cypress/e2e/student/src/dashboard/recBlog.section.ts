import {RecBlogAction} from "../../../../support/actions/student/dashboard";
const {openRecBlog} = new RecBlogAction();
export function recBlogSection() {
	describe('Recommended blog section: ', () => {
			it("should open recommended courses content page", openRecBlog)
	});
}