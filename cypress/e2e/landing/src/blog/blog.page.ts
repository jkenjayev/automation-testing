import {blogAction as blog} from "../../../../support/actions/landing/blog";

export function blogPage() {
	describe("Blogs page: ", () => {
		beforeEach(blog.openBlogs);
		it("should filter blogs with first category", blog.filter1);
		it("should filter blogs with second category", blog.filter2);
		it("should filter blogs with third category", blog.filter3);
		it("should show all blogs", blog.showMoreBlogs);
		it("open blog content page", blog.openBlogDetails);
		describe("Blog content page: ", () => {
			beforeEach(blog.openBlogDetails);
			it("should share blog to telegram", () => {
				blog.showShareSocials();
				blog.shareToTelegram();
			});
			it("should share blog to facebook", () => {
				blog.showShareSocials();
				blog.shareToFacebook();
			});
			it("should copy blog link", () => {
				blog.showShareSocials();
			})
		})
		
	})
}