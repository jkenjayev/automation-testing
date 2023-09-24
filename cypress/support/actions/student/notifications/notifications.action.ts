import { NotificationsRepo } from "../../../repositories";

const notification = new NotificationsRepo();

export class NotificationsAction {
  openNotificationsPage = () =>
    notification
      .notificationPageLink()
      .click({ force: true });
  openFirstNotificationContent = () =>
    notification
      .notReadNotification()
      .click({ force: true });
  filterNotifications = () => {
    notification.filters();
    cy.wait(500);
    notification.parentFilter();
  };
}
