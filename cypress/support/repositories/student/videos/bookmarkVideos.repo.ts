export class BookmarkVideosRepo {
  videosPageLink = () => cy.get('[href="/videos"]');
  bookmarkedMore = () =>
    cy
      .get("h3:contains(Saqlangan videolar)")
      .siblings(
        "button:contains(Barcha videolarni ko‘rish)",
      );
  bookmarkedVideo = () => cy.get("");
}
