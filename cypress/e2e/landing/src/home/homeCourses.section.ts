import {HomeCoursesAction} from "../../../../support/actions";
const {openFirstCourse, openCourses} = new HomeCoursesAction();

export function homeCoursesSection() {
    describe("Yo'nalishlar bo'yicha kurslar section: ", () => {
        it("should open first course ", openFirstCourse);
        it('should open courses page ', openCourses);
    })
}