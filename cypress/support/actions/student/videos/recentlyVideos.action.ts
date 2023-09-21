import { RecentlyVideosRepo } from "../../../repositories";

const video = new RecentlyVideosRepo();

export class RecentlyVideosAction {
  openVideosPage = () =>
    video.videosPageLink().click({ force: true });
  openRecentlyVideosPage = () =>
    video.recentlyMore().click({ force: true });
  playRecentlyVideo = () =>
    video.recentlyVideo().click({ force: true });
}
