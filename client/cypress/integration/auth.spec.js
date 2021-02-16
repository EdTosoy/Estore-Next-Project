/// <reference types="cypress"/>

context("Auth Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/auth");
  });

  it("should find Auth page", () => {
    cy.get("h1").contains("Free Account");
  });
});
