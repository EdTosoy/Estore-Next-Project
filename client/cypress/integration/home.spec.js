/// <reference types="cypress"/>

context("Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should find Home page", () => {
    cy.get("h1").contains("Smart phone made for you.");
  });
});
