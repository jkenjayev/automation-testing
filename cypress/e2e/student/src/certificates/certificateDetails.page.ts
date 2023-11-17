import { openAvailableCertificateDetailsPage } from "./certificates.page";

export function certificateDetailsPage() {
  beforeEach(openAvailableCertificateDetailsPage);
  describe("certificateDetailsPage", () => {
    it("should open certificate details page", () => {});
    it("should download certificate as a pdf file", () => {});
    describe("Share certificate", () => {
      it("share on telegram certificate as a pdf file", () => {});
      it("share on facebook certificate as a pdf file", () => {});
      it("copy on link of certificate", () => {});
    });
  });
}
