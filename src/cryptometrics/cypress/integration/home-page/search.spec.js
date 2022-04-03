/// <reference types="cypress" />

describe("search on home page", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
  });
  // FT-HP-2
  it("search for valid cryptocurrencies", () => {
    const searchInput = "[placeholder='Search']";
    const cryptocurrencyName = "bitcoin";
    cy.get(searchInput).should("be.visible");
    cy.get(searchInput).type(`${cryptocurrencyName}`);

    // card-view
    cy.get("button#card-view").click();
    cy.get("p#currency-name").each((name) => {
      cy.wrap(name).should("contain", "Bitcoin");
      cy.wrap(name).should("not.contain", "Ethereum");
    });

    // table-view
    cy.get("button#list-view").click();
    cy.get("p#currency-name").each((name) => {
      cy.wrap(name).should("contain", "Bitcoin");
      cy.wrap(name).should("not.contain", "Ethereum");
    });
  });

  // FT-HP-3
  it("search for invalid cryptocurrencies", () => {
    const searchInput = "[placeholder='Search']";
    const cryptocurrencyName = "abcd123";
    cy.get(searchInput).should("be.visible");
    cy.get(searchInput).type(`${cryptocurrencyName}`);

    // card-view
    cy.get("button#card-view").click();
    cy.get("body").should("contain", "No matching cryptocurrencies found.");

    // table-view
    cy.get("button#list-view").click();
    cy.get("body").should("contain", "No matching cryptocurrencies found.");
  });
});
