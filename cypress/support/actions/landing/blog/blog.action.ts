import { blogsRepo as blogs } from "../../../repositories/landing/blog";

export class BlogAction {
  openBlogs = () => blogs.blogs().click({ force: true });
  filter1 = () => blogs.blogFilter().children().eq(1).click({ force: true });
  filter2 = () => blogs.blogFilter().children().eq(2).click({ force: true });
  filter3 = () => blogs.blogFilter().children().eq(3).click({ force: true });
  openBlogDetails = () => blogs.blogArticle().children().first().click({ force: true });
  showMoreBlogs = () => blogs.moreBtn().click({ force: true });
  showShareSocials = () => blogs.shareBtn().click({ force: true });
  shareToTelegram = () => blogs.shareSocial().eq(0).should("contain.text", "Telegram");
  shareToFacebook = () => blogs.shareSocial().eq(1).click({ force: true });
  copyLink = () => blogs.shareSocial().eq(2).should("have.text", "Havolani nusxalash");
}

export const blogAction: BlogAction = new BlogAction();