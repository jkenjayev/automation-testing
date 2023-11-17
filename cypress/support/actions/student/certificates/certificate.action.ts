import { CertificatesRepo } from "../../../repositories";

const { certificatesPageLink, availableCertificate } =
  new CertificatesRepo();

export class CertificateAction {
  openCertificatesPage = () =>
    certificatesPageLink().click({ force: true });
  openAvailableCertificateDetailsPage = () =>
    availableCertificate().click({ force: true });
}
