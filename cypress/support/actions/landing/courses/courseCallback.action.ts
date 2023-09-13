import {CourseCallbackRepo} from "../../../repositories";

const {stdName, nickName, privacy, submitBtn, phone, checkbox} = new CourseCallbackRepo();

export class CourseCallbackAction {
	sendFeedbackByPhone = (name: string, phoneNumber: string) => {
		stdName().type(name, {force: true});
		phone().type(phoneNumber, {force: true});
		submitBtn().click({force: true});
	}
	
	sendFeedbackByTelegram = (name: string, nick: string) => {
		checkbox().check({force: true});
		stdName().type(name, {force: true});
		nickName().type(nick, {force: true});
		submitBtn().click({force: true});
	}
	
	openPrivacy = () => privacy().click({force: true});
}