export class NotificationsRepo {
  notificationPageLink = () =>
    cy.get('[href="/notifications"]');
  notReadNotification = () =>
    cy.get(".not-read").first();
}
