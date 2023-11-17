import { footerAction as footer } from "../../../../support";

export function footerSection() {
  describe("Footer section: ", () => {
    describe("Information part: ", () => {
      it("should open FAQ page", footer.openFaq);
      it("should open blogs page", footer.openBlog);
      it("should open Privacy policy page", footer.privacy);
    });
    
    describe("Courses part: ", () => {
      it("should open first footer course's details page", footer.openFooterCourse);
    });
    
    describe("Projects part: ", () => {
      it("should open Osmondagi bolalar", footer.openP1);
      it("should open O dan 1 gacha", footer.openP2);
      it("should open Abutech", footer.openP3);
      it("should open Alohida mavzu", footer.openP4);
    });
    
    describe("Social messengers part: ", () => {
      it("should open Telegram", footer.openTelegram);
      it("should open Facebook", footer.openFacebook);
      it("should open Youtube", footer.openYoutube);
      it("should open Instagram", footer.openInstagram);
      it("should open LinkedIn", footer.openLinkedIn);
      it("should type Phone number", footer.typePhone);
    });
  });
}