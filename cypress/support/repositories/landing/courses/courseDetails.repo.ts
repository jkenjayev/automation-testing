
export class CourseDetailsRepo {
	course = () => cy.get('.course-card__item');
	
	freeVideo = () => cy.contains("Bepul ko‘rish");
	buyCourseBtn = () => cy.get(".course-price__buy").contains("Sotib olish");
	lessonTitle = () => cy.get('.accordion-list__item').eq(1).children().first();
	navigationMenu = () => cy.get(".course-main__navigation").children();
}

export const courseDetailsRepo: CourseDetailsRepo = new CourseDetailsRepo();