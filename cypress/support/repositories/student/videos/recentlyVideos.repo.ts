export class RecentlyVideosRepo {
  videosPageLink = () => cy.get('[href="/videos"]');
  recentlyMore = () =>
    cy
      .get("h3:contains(So‘nggi ko‘rilgan videolar)")
      .siblings(
        "button:contains(Barcha videolarni ko‘rish)",
      );
  recentlyVideo = () =>
    cy.contains("qismi ko‘rilgan").first();
}
