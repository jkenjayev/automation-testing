import { recentlyVideosPage } from "./recentlyVideos.page";
import { bookmarkVideosPage } from "./bookmarkVideos.page";
import { BookmarkVideosAction } from "../../../../support/actions";

const { openVideosPage } = new BookmarkVideosAction();

export function videosPage() {
  describe("videosPage", () => {
    it("should open videos page", openVideosPage);
    /**
     * Recently videos page
     */
    recentlyVideosPage();

    /**
     * BookmarkVideosPage
     */
    bookmarkVideosPage();
  });
}
