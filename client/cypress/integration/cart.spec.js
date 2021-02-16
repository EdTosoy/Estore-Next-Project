/// <reference types="cypress"/>

context("Cart Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/cart");
  });

  it("should find Cart page", () => {
    cy.get("div").contains("Shopping Cart");
  });
});
