import {HeroAction} from "../../../../support/actions";
const {openCourses} = new HeroAction();
export function heroSection() {
    describe("Hero section: ", () => {
        it("should open courses from hero section: ", openCourses)
    })
}