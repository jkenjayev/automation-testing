import {AdvantagesAction} from "../../../../support/actions";
const {showMoreAdv} = new AdvantagesAction()
export function advantagesSection() {
    describe("Our advantages section: ", () => {
        it("should show more out advantages", showMoreAdv)
    })
}