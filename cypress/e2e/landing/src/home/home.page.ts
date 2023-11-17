import {headerSection, heroSection, advantagesSection, homeCoursesSection, videoCommentSection, callbackSection, footerSection} from "./index";
export function homePage () {
    describe("Home Page: ", () => {
        /**
         *  Header section
         */
        headerSection();

        /**
         *  Hero section
         */
        heroSection();

        /**
         *  Our advantages section
         */
        advantagesSection();

        /**
         *  Home courses section
         */
        homeCoursesSection();

        /**
         * Video comment section
         */
        videoCommentSection();
        
        /**
         *  Callback section
         */
        callbackSection();
        
        /**
         *  Footer section
         */
        footerSection();
    })
}