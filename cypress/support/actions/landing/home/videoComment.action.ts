import { videoCommentRepo } from "../../../repositories";

export class VideoCommentAction {
  playVideo = () => videoCommentRepo.videoComment().click({ force: true });
}

export const videoCommentAction: VideoCommentAction = new VideoCommentAction();