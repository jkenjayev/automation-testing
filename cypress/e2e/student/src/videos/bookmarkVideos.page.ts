import { BookmarkVideosAction } from "../../../../support/actions";
const video = new BookmarkVideosAction();

export function bookmarkVideosPage() {
  describe("Bookmark Videos Page", () => {
    beforeEach(video.openVideosPage);
    it(
      "should play bookmarked video",
      video.playBookmarkedVideo,
    );
    it(
      "should open bookmark videos page",
      video.openBookmarkVideosPage,
    );
  });
}
