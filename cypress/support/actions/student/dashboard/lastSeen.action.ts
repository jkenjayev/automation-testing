import {LastSeenRepo} from "../../../repositories";
const {greetingMsg}: LastSeenRepo = new LastSeenRepo();
export class LastSeenAction {
	showGreetingMsg = () => greetingMsg().should("contain.text", "Assalomu alaykum,");
}