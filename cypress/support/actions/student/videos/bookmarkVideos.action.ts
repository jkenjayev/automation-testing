import { BookmarkVideosRepo } from "../../../repositories";

const video = new BookmarkVideosRepo();

export class BookmarkVideosAction {
  openVideosPage = () =>
    video.videosPageLink().click({ force: true });
  openBookmarkVideosPage = () =>
    video.bookmarkedMore().click({ force: true });
  playBookmarkedVideo = () =>
    video.bookmarkedVideo().click({ force: true });
}
