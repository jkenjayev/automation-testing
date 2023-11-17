import {LastSeenAction} from "../../../../support/actions/student/dashboard";
const {showGreetingMsg}: LastSeenAction = new LastSeenAction();
export function lastSeenSection() {
	describe('Last seen video section: ', () => {
		it("should show greeting message", showGreetingMsg);
	});
}