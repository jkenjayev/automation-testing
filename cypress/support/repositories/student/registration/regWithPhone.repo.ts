export class RegWithPhoneRepo {
	regPage = () => cy.get('[href="/auth/register"]');
	name = () => cy.get('#firstName');
	phone = () => cy.get('#phone');
	pwd = () => cy.get('#password');
	checkPwd = () => cy.get('#password_check');
	submitBtn = () => cy.get('button').contains('Ro‘yxatdan o‘tish');
	supportLink = () => cy.get('[href="https://t.me/ntonlayn_bot"]');
	privacy = () => cy.get('[href="/static/media/oferta.98bafc87b0606713cd40.pdf"]').eq(0);
	privacyPolicy = () => cy.get('[href="/static/media/oferta.98bafc87b0606713cd40.pdf"]').contains('Foydalanish qoidalariga');
}

export const regWithPhoneRepo: RegWithPhoneRepo = new RegWithPhoneRepo();