export class HomeCoursesRepo {
    firstCourse = () =>  cy.get(".courses-item > a").first();
    coursesLink = () => cy.get('[href="/courses"]').contains("Barcha kurslarni ko‘rish");
}

export const homeCoursesRepo: HomeCoursesRepo = new HomeCoursesRepo();