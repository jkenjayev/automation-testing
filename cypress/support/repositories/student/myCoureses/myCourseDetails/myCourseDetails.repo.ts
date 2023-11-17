

export class MyCourseDetailsRepo {
	myCourses = () => cy.get('[href="/my-courses"]').eq(0);
	course = () => cy.get('[href*="/my-course-single/"]').first();
	courseDetails = () => cy.get('button').contains('Kurs haqida batafsil');
	continueBuyBtn = () => cy.get("button").contains('Sotib olish');
	myModule = () => cy.get('[alt="video-status"]').eq(1);
	lesson = () => cy.contains("-mavzu: ").eq(0);
	video = () => cy.contains("-dars").eq(0);
}