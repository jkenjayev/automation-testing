import { callBackRepo  } from "../../../repositories";

export class CallbackAction {
  sendFeedbackByPhone = (name: string, phoneNumber: string) => {
    callBackRepo.stdName().type(name, { force: true });
    callBackRepo.phone().type(phoneNumber, { force: true });
    callBackRepo.submitBtn().click({ force: true });
  };
  
  sendFeedbackByTelegram = (name: string, nick: string) => {
    callBackRepo.checkbox().check({ force: true });
    callBackRepo.stdName().type(name, { force: true });
    callBackRepo.nickName().type(nick, { force: true });
    callBackRepo.submitBtn().click({ force: true });
  };
  
  openFaq = () => callBackRepo.faq().click({ force: true });
  openPrivacy = () => callBackRepo.privacy().click({ force: true });
}

export const callBackAction = new CallbackAction();