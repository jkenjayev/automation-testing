export class CourseCallbackRepo {
	stdName = () => cy.get("#studentName");
	phone = () => cy.get('[name="phoneNumber"]');
	checkbox = () => cy.get('#isTelegramUsed');
	nickName = () => cy.get('#telegramAccount');
	privacy = () => cy.get('[href="/oferta.pdf"]').contains("Platformadan foydalanish qoidalari");
	submitBtn = () => cy.get('[type="submit"]').contains("So‘rov yuborish");
}

export const courseCallbackRepo = new CourseCallbackRepo();
