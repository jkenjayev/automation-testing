export class HeaderRepo {
    logo = () => cy.get('[href="/"]').eq(0);
    course = () => cy.get('[href="/courses"]').contains("Kurslar");
    blog = () => cy.get('[href="/blog"]').contains("Blog");
    stdLink = () => cy.get('li').contains("Kirish");
}