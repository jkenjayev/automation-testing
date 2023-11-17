import {homeCourses} from "../../../../support";

export function homeCoursesSection() {
    describe("Yo'nalishlar bo'yicha kurslar section: ", () => {
        it("should open first course ", homeCourses.openFirstCourse);
        it('should open courses page ', homeCourses.openCourses);
    })
}