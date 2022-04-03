/// <reference types="cypress" />

// FT-CP-1
describe("chart on compare page", () => {
  beforeEach(() => {
    cy.visit("localhost:3000/compare");
  });
  it("displays chart", () => {
    cy.get("canvas").should("be.visible");
  });
});
