import { LoginWithEmailRepo } from "../../../repositories";

const login = new LoginWithEmailRepo();

export class LoginWithEmailAction {
  withEmail = (email: any, pwd: any) => {
    login.emailTab().click({ force: true });
    login.email().type(email);
    login.pwd().type(pwd);
    login.submitBtn().click({ force: true });
  };

  recoveryPwd = (
    email: string,
    otp: string,
    pwd: string,
  ) => {
    login.emailTab().click({ force: true });
    login.recoveryPwdBtn().click({ force: true });
    login.recoveryEmail().type(email);
    login.continueBtn().click({ force: true });
    login.otp().type(otp);
    login.newPwd().type(pwd);
    login.checkPwd().type(pwd);
    login.continueBtn().click({ force: true });
  };
}
