import { RecentlyVideosAction } from "../../../../support/actions";
const video = new RecentlyVideosAction();

export function recentlyVideosPage() {
  describe("Recently Videos Page", () => {
    beforeEach(video.openVideosPage);
    it(
      "should play recently video",
      video.playRecentlyVideo,
    );
    it(
      "should open recently videos page",
      video.openRecentlyVideosPage,
    );
  });
}
