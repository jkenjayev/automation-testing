class HeroRepo {
    coursesLink = () => cy.get('[href="/courses"]').contains("Kurslarni ko‘rish");
}

export const heroRepo: HeroRepo = new HeroRepo();