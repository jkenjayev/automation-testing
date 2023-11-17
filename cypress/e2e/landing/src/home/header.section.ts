import {headerAction} from "../../../../support";
export function headerSection (){
    describe("Header section: ", () => {
        it("should click on logo", headerAction.clickLogo);
        it('should open courses page', headerAction.openCourses);
        it("should open blog page", headerAction.openBlog)
        it("should redirect to student app", headerAction.openStd);
    })
}