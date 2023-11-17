export class NotificationsRepo {
  notificationPageLink = () =>
    cy.get('[href="/notifications"]');
  notReadNotification = () =>
    cy.get(".not-read").first();

  filters = () =>
    cy
      .get("h3:contains(Xabarnomalar)")
      .siblings()
      .contains("Barcha")
      .click({ force: true });

  parentFilter = () =>
    cy
      .get("h4:contains(Platformadagi yangi Kurs)")
      .parent()
      .children();
}
