/// <reference types="cypress" />

// FT-CP-1
describe("chart on detail page", () => {
  beforeEach(() => {
    cy.visit("localhost:3000/coins/bitcoin");
  });
  it("displays chart", () => {
    cy.get("canvas").should("be.visible");
  });
});
