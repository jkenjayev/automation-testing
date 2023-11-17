export class RegWithEmailRepo {
	regPage = () => cy.get('[href="/auth/register"]');
	
	emailTab = () => cy.get('[href="/auth/register/by-email"]');
	name = () => cy.get('#firstName');
	email = () => cy.get('[name="email"]');
	pwd = () => cy.get('#password');
	checkPwd = () => cy.get('#password_check');
	submitBtn = () => cy.get('button').contains("Ro‘yxatdan o‘tish");
	otp = () => cy.get("#code");
	continueBtn = () => cy.get('button').contains('Davom etish');
}

export const regWithEmailRepo: RegWithEmailRepo = new RegWithEmailRepo();