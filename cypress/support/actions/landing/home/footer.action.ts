import {FooterRepo} from "../../../repositories";

const footer = new FooterRepo();

export class FooterAction {
	openFaq = () => footer.faq().click({force: true});
	openBlog = () => footer.blog().click({force: true});
	privacy = () => footer.privacy().click({force: true});
	openFooterCourse = () => footer.footerCourse().click({force: true});
	openP1 = () => footer.pOne().trigger('click', { ctrlKey: true });
	openP2 = () => footer.pTwo().trigger('click', { ctrlKey: true });
	openP3 = () => footer.pThree().trigger('click', { ctrlKey: true });
	openP4 = () => footer.pFour().trigger('click', { ctrlKey: true });
	openTelegram = () => footer.telegram().trigger('click', { ctrlKey: true });
	openFacebook = () => footer.facebook().click({force: true});
	openYoutube = () => footer.youtube().trigger('click', { ctrlKey: true });
	openInstagram = () => footer.instagram().click({force: true});
	openLinkedIn = () => footer.linkedIn().click({force: true});
	typePhone = () => footer.phone().should("contain", '+998 (78) 888 9 888');
}