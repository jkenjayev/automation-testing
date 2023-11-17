import {registerWithEmail} from "./regWithEmail.tab";
import {registerWithPhoneTab} from "./regWithPhone.tab";

export function registerPage() {
	describe("Register page: ", () => {
		/**
		 * Register with phone
		 */
		registerWithPhoneTab();
		
		/**
		 * Register with email
		 */
		registerWithEmail()
	})
}