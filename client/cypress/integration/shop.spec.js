/// <reference types="cypress"/>

context("Shop Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/shop");
  });

  it("should find Shop page", () => {
    cy.get("h1").contains("Latest Products");
  });
});
