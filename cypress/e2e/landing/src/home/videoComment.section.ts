import {VideoCommentAction} from "../../../../support/actions";
const {playVideo} = new VideoCommentAction();
export function videoCommentSection() {
    describe("Video Comment section: ", () => {
        it("should play video ", playVideo)
    })
}