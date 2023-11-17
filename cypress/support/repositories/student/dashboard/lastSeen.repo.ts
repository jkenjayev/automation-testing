
export class LastSeenRepo {
	greetingMsg = () => cy.get('h2').contains("Assalomu alaykum,");
	allCoursesBtn = () => cy.get("button").contains("Barcha kurslar bo‘limiga o‘tish");
	
}