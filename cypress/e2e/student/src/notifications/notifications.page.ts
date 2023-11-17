import { NotificationsAction } from "../../../../support/actions";

const {
  openFirstNotificationContent,
  openNotificationsPage,
  filterNotifications,
} = new NotificationsAction();

export function notificationPage() {
  describe("notification page", () => {
    beforeEach(openNotificationsPage);
    // it("should open notifications page", () => {});
    // it(
    //   "should open first notification content page",
    //   openFirstNotificationContent,
    // );
    it(
      "should filter notifications",
      filterNotifications,
    );
  });
}
