import {CallbackRepo} from "../../../repositories";

const {stdName, faq, nickName, privacy, submitBtn, phone, checkbox} = new CallbackRepo();

export class CallbackAction {
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
	
	openFaq = () => faq().click({force: true});
	openPrivacy = () => privacy().click({force: true});
}