import {LoginWithPhoneRepo} from "../../../repositories";

const login = new LoginWithPhoneRepo();

export class LoginWithPhoneAction {
	withPhone = (phone: string, pwd: string) => {
		login.phone().type(phone);
		login.pwd().type(pwd);
		login.submitBtn().click({force: true})
	}
	
	recoveryPwd = (phone: string, otp: string, pwd: string) => {
		login.recoveryPwdBtn().click({force: true});
		login.recoveryPhone().type(phone);
		login.continueBtn().click({force: true});
		login.otp().type(otp);
		login.newPwd().type(pwd);
		login.checkPwd().type(pwd);
		login.continueBtn().click({force: true});
	}
}