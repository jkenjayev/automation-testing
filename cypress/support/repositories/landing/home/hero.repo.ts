export class HeroRepo {
    coursesLink = () => cy.get('[href="/courses"]').contains("Kurslarni ko‘rish");
}