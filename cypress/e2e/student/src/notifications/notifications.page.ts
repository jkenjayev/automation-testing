import { NotificationsAction } from "../../../../support/actions";
const {
  openFirstNotificationContent,
  openNotificationsPage,
} = new NotificationsAction();

export function notificationPage() {
  describe("notification page", () => {
    beforeEach(openNotificationsPage);
    it("should open notifications page", () => {});
    it(
      "should open first notification content page",
      openFirstNotificationContent,
    );
  });
}
