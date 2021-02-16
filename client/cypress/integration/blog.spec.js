/// <reference types="cypress"/>

context("Blog Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/blog");
  });

  it("should find Blog page", () => {
    cy.get("h1").contains("PAGENAME BLOGS");
  });
});
