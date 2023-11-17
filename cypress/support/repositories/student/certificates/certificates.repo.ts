import "cypress-if";
export class CertificatesRepo {
  certificatesPageLink = () =>
    cy.get('[href="/certificates"]');
  availableCertificate = () =>
    cy
      .get('[href*="/certificates"]')
      .each((el) => el.length < 12)
      .if();
}
