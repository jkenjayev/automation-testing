export class CallbackRepo {
  faq = () => cy.get("a").contains("FAQ");
  stdName = () => cy.get("#studentName");
  phone = () => cy.get("[name=\"phoneNumber\"]");
  checkbox = () => cy.get("#isTelegramUsed");
  nickName = () => cy.get("#telegramAccount");
  privacy = () => cy.get("[href=\"/oferta.pdf\"]").contains("Platformadan foydalanish qoidalari");
  submitBtn = () => cy.get("[type=\"submit\"]").contains("So‘rov yuborish");
}

export const callBackRepo: CallbackRepo = new CallbackRepo();