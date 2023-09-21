import "cypress-if";

export class AllCourseDetailsRepo {
	accessibleCourse = () => cy.contains(" ta dars").if().first();
	continueBtn = () => cy.get('button:contains(Sotib olish)').if();
	detailsBtn = () => cy.get('button:contains(Kurs haqida batafsil)');
	freeVideo = () => cy.get('button').contains('Bepul ko‘rish');
	buyModule = () => cy.get('ol li div').contains("-modul");
}