import {lastSeenSection} from "./lastSeen.section";
import {recCoursesSection} from "./recCourses.section";
import {recBlogSection} from "./recBlog.section";
import {sidebarCoursesSection} from "./sidebarCourses.section";

export function dashboardPage() {
	describe('dashboardPage', () => {
		/**
		 * Last seen section
		 */
		// lastSeenSection()
		
		/**
		 * Recommended course
		 */
		recCoursesSection()
		
		/**
		 * Recommended blog
		 */
		recBlogSection()
		
		/**
		 * Sidebar courses section
		 */
		sidebarCoursesSection()
	});
}