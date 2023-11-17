
export class CoursesRepo {
	coursesPage = () => cy.get('[href="/courses"]').eq(0);
	courseSearchInput = () => cy.get('.courses__input');
	categoryOne = () => cy.get('.courses-tabbar__list').children().eq(1);
	categoryTwo = () => cy.get('.courses-tabbar__list').children().eq(2);
	categoryThree = () => cy.get('.courses-tabbar__list').children().eq(3);
	course = () => cy.get('.course-card__item');
}

export const coursesRepo: CoursesRepo = new CoursesRepo();