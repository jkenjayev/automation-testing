import { CertificateAction } from "../../../../support/actions/student/certificates";

export const {
  openAvailableCertificateDetailsPage,
  openCertificatesPage,
} = new CertificateAction();

export function certificatesPage() {
  describe("certificates Page", () => {
    beforeEach(openCertificatesPage);
    it("should open Certificates page", () => {});
    it(
      "should open available certificate details page",
      openAvailableCertificateDetailsPage,
    );
    it("should show certificates with the title 'Kurs to'lig sotib olinmagan'", () => {});
    it("should show certificates with the title 'Kurs videolarining 100% ini va uga vazifalarining kamida 60 % qismini yakunlang va Sertifikatni qo' lga kiriting.'", () => {});
  });
}
