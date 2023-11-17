import { courseCallbackRepo } from "../../../repositories";

export class CourseCallbackAction {
  sendFeedbackByPhone = (name: string, phoneNumber: string) => {
    courseCallbackRepo.stdName().type(name, { force: true });
    courseCallbackRepo.phone().type(phoneNumber, { force: true });
    courseCallbackRepo.submitBtn().click({ force: true });
  };
  
  sendFeedbackByTelegram = (name: string, nick: string) => {
    courseCallbackRepo.checkbox().check({ force: true });
    courseCallbackRepo.stdName().type(name, { force: true });
    courseCallbackRepo.nickName().type(nick, { force: true });
    courseCallbackRepo.submitBtn().click({ force: true });
  };
  
  openPrivacy = () => courseCallbackRepo.privacy().click({ force: true });
}

export const courseCallbackAction: CourseCallbackAction = new CourseCallbackAction();