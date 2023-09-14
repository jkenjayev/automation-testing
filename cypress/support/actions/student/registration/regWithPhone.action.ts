import {RegWithPhoneRepo} from "../../../repositories/student/registration";
const reg:RegWithPhoneRepo = new RegWithPhoneRepo();

export class RegWithPhoneAction {
	withPhone = (name: string, pwd: string, phone: string) => {
		reg.regPage().click();
		reg.name().type(name);
		reg.phone().type(phone);
		reg.pwd().type(pwd);
		reg.checkPwd().type(pwd);
		reg.submitBtn().click({force: true});
	}
	clickSupportLink = () => {
		reg.regPage().click();
		reg.supportLink().trigger('click', { ctrlKey: true });
	}
	openPrivacy = () => {
		reg.regPage().click();
		reg.privacy().click({force: true})
	};
	openPrivacyPolicy = () => {
		reg.regPage().click();
		reg.privacyPolicy().click({force: true})
	};
}