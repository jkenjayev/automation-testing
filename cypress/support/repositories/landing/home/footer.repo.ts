export class FooterRepo {
  faq = () => cy.get("[href=\"/faq\"]").contains("FAQ");
  blog = () => cy.get("[href=\"/blog\"]").contains("Blog");
  privacy = () => cy.get("[href=\"/oferta.pdf\"]").contains("Ommaviy oferta");
  footerCourse = () => cy.contains("Ommabop kurslar").next().children().first();
  pOne = () => cy.get("[href=\"https://www.youtube.com/@Osmondagibolalar\"]");
  pTwo = () => cy.get("[href=\"https://www.youtube.com/watch?v=R5CYJ8zpdTY\"]");
  pThree = () => cy.get("[href=\"https://abutech.uz/\"]");
  pFour = () => cy.get("[href=\"https://t.me/alohidamavzu\"]");
  
  telegram = () => cy.get("[href=\"https://t.me/najottalim\"]").eq(0);
  facebook = () => cy.get("[href=\"https://www.facebook.com/najottalim\"]").eq(0);
  youtube = () => cy.get("[href=\"https://www.youtube.com/c/najottalim\"]").eq(0);
  instagram = () => cy.get("[href=\"https://www.instagram.com/najottalim\"]").eq(0);
  linkedIn = () => cy.get("[href=\"https://www.linkedin.com/company/najottalim/\"]").eq(0);
  phone = () => cy.get(".footer__tel").eq(0);
}

export const footerRepo: FooterRepo = new FooterRepo();