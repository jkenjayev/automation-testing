

export class VideoCommentRepo {
    videoComment = () => cy.get(".reviews__item").first();
}

export const videoCommentRepo: VideoCommentRepo = new VideoCommentRepo();