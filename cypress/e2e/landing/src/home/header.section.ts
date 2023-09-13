import {HeaderAction} from "../../../../support/actions";
const {clickLogo, openBlog, openCourses, openStd} = new HeaderAction();
export function headerSection (){
    describe("Header section: ", () => {
        it("should click on logo", clickLogo);
        it('should open courses page', openCourses);
        it("should open blog page", openBlog)
        it("should redirect to student app", openStd);
    })
}