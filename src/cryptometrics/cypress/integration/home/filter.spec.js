/// <reference types="cypress" />

// FT-HP-4
describe("filter on home page", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
  });

  it("filter price less than value", () => {
    const filterButton = "#filter-button";
    const priceOption = "#current_price-option";
    cy.get(filterButton).should("be.visible");
    cy.get(filterButton).click();
    cy.get(priceOption).click();
    cy.get("span").contains("is less than").click();
    cy.get("#radio-form-input").type(100);
    cy.get("button").contains("Filter").click();

    cy.get("p#currency-price").each((price) => {
      cy.wrap(price)
        .invoke("text")
        .then((price) => {
          return price.replace("$", "").replace(",", "");
        })
        .then(parseFloat)
        .should("be.lessThan", 100);
    });
  });

  it("filter price greater than value", () => {
    const filterButton = "#filter-button";
    const priceOption = "#current_price-option";
    cy.get(filterButton).should("be.visible");
    cy.get(filterButton).click();
    cy.get(priceOption).click();
    cy.get("span").contains("is greater than").click();
    cy.get("#radio-form-input").type(100);
    cy.get("button").contains("Filter").click();

    cy.get("p#currency-price").each((price) => {
      cy.wrap(price)
        .invoke("text")
        .then((price) => {
          return price.replace("$", "").replace(",", "");
        })
        .then(parseFloat)
        .should("be.greaterThan", 100);
    });
  });

  // it("search for invalid cryptocurrencies", () => {
  //   const searchInput = "[placeholder='Search']";
  //   const cryptocurrencyName = "abcd123";
  //   cy.get(searchInput).should("be.visible");
  //   cy.get(searchInput).type(`${cryptocurrencyName}`);
  //   cy.get("body").should("contain", "No matching cryptocurrencies found.");
  // });
});
