export class LoginWithEmailRepo {
	emailTab = () => cy.get('[href="/auth/login/by-email"]');
	email = () => cy.get('[name="email"]');
	pwd = () => cy.get('[name="password"]');
	submitBtn = () => cy.get('button').contains('Kirish');
	recoveryPwdBtn = () => cy.contains("Parolingizni unutdingizmi?");
	recoveryEmail = () => cy.get('[placeholder="example@najottalim.uz"]').eq(1);
	continueBtn = () => cy.get('button').contains('Davom etish');
	otp = () => cy.get('#code');
	newPwd = () => cy.get('[name="new_password"]');
	checkPwd = () => cy.get('[name="new_password_check"]');
}

export const logWithEmailRepo: LoginWithEmailRepo = new LoginWithEmailRepo();