
export class RecCourseRepo {
	allCourses = () => cy.get('[href="/courses"]').contains('Barcha kurslarni ko‘rish');
	recCourse = () => cy.get('[href="/course-single/]').each(el => el.length > 15);
}