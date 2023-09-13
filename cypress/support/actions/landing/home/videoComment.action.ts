import {VideoCommentRepo} from "../../../repositories";
const {videoComment} = new VideoCommentRepo();
export class VideoCommentAction {
    playVideo = () => videoComment().click({force: true});
}