/// <reference types="cypress" />

describe("table on home page", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
  });
  // FT-HP-1
  it("displays table", () => {
    cy.get("button#list-view").should("be.visible");
    cy.get("button#list-view").click();
    cy.get("table").should("be.visible");
  });
});
