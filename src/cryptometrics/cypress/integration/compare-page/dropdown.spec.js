/// <reference types="cypress" />

const FIRST_DROPDOWN_BUTTON = "button#first-dropdown";
const SECOND_DROPDOWN_BUTTON = "button#second-dropdown";
const BITCOIN_DROPDOWN_ITEM = "#dropdown_item_bitcoin";

// FT-CP-2
describe("dropdown on compare page", () => {
  beforeEach(() => {
    cy.visit("localhost:3000/compare");
  });

  it("dropdowns are visible", () => {
    cy.get(FIRST_DROPDOWN_BUTTON).should("be.visible");
    cy.get(SECOND_DROPDOWN_BUTTON).should("be.visible");
  });

  it("dropdown item becomes disabled if already selected", () => {
    cy.get(FIRST_DROPDOWN_BUTTON).click();
    cy.get(BITCOIN_DROPDOWN_ITEM)
      .should("be.visible")
      .should("not.be.disabled")
      .click();

    cy.get(SECOND_DROPDOWN_BUTTON).click();
    cy.get(BITCOIN_DROPDOWN_ITEM).should("be.visible").should("be.disabled");
  });
});
