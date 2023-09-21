

export class MyCoursesRepo {
	myCourses = () => cy.get('[href="/my-courses"]').contains('Mening kurslarim').eq(0);
	course = () => cy.get('[href*="/my-course-single/"]').eq(0);
}