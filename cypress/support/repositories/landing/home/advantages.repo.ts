

export class AdvantagesRepo {
    showMore = () => cy.get(".our-advantages__more-btn").contains("Ko‘proq");
}