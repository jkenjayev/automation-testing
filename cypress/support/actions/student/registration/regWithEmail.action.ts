import {RegWithEmailRepo} from "../../../repositories/student/registration";
const reg: RegWithEmailRepo = new RegWithEmailRepo();

export class RegWithEmailAction {
	withEmail = (name: string, email: string, pwd: string, otp: string) => {
		reg.regPage().click({force: true})
		reg.emailTab().click({force: true});
		reg.name().type(name);
		reg.email().type(email);
		reg.pwd().type(pwd);
		reg.checkPwd().type(pwd);
		reg.submitBtn().click({force: true});
		reg.otp().type(otp);
		reg.continueBtn().click({force: true})
	}
}