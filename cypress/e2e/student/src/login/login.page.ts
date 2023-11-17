import {loginWithEmailTab} from "./loginWithEmail.tab";
import {loginWithPhoneTab} from "./loginWithPhone.tab";

export function loginPage() {
	describe("Login page: ", () => {
		loginWithPhoneTab();
		loginWithEmailTab();
	})
}

