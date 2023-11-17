export class LoginWithPhoneRepo {
	phone = () => cy.get('#phone');
	recoveryPhone = () => cy.get('form input#phone').eq(1);
	
	pwd = () => cy.get('[name="password"]');
	submitBtn = () => cy.get("button").contains("Kirish");
	recoveryPwdBtn = () => cy.contains("Parolingizni unutdingizmi?");
	continueBtn = () => cy.get("button").contains('Davom etish');
	otp = () => cy.get('#code');
	newPwd = () => cy.get('[name="new_password"]');
	checkPwd = () => cy.get('[name="new_password_check"]');
}

export const logWithPhoneRepo: LoginWithPhoneRepo = new LoginWithPhoneRepo();