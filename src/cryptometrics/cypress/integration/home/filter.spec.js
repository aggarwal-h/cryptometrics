/// <reference types="cypress" />

const TABLE_VIEW_BUTTON = "button#list-view";
const FILTER_BUTTON = "#filter-button";
const PRICE_OPTION = "#current_price-option";
const NAME_OPTION = "#name-option";
const PRICE_CHANGE_PERCENTAGE = "#price_change_percentage_24h-option";
const PRICE_CHANGE = "#price_change_24h-option";

// FT-HP-4
describe("filter on home page", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
  });

  it("filter price less than value", () => {
    cy.get(FILTER_BUTTON).should("be.visible");
    cy.get(FILTER_BUTTON).click();
    cy.get(PRICE_OPTION).click();
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
    cy.get(FILTER_BUTTON).should("be.visible");
    cy.get(FILTER_BUTTON).click();
    cy.get(PRICE_OPTION).click();
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

  it("filter by a specific name", () => {
    cy.get(FILTER_BUTTON).should("be.visible");
    cy.get(FILTER_BUTTON).click();
    cy.get(NAME_OPTION).click();
    cy.get("span").contains("is").click();
    cy.get("#radio-form-input").type("Bitcoin");
    cy.get("button").contains("Filter").click();

    cy.get("p#currency-name").each((name) => {
      cy.wrap(name).invoke("text").should("eq", "Bitcoin");
    });
  });

  it("filter names containing a value", () => {
    cy.get(FILTER_BUTTON).should("be.visible");
    cy.get(FILTER_BUTTON).click();
    cy.get(NAME_OPTION).click();
    cy.get("span").contains("contains").click();
    cy.get("#radio-form-input").type("bit");
    cy.get("button").contains("Filter").click();

    cy.get("p#currency-name").each((name) => {
      cy.wrap(name)
        .invoke("text")
        .then((name) => name.toLowerCase())
        .should("contain", "bit");
    });
  });

  it("filter price change percentage less than value", () => {
    cy.get(FILTER_BUTTON).should("be.visible");
    cy.get(FILTER_BUTTON).click();
    cy.get(PRICE_CHANGE_PERCENTAGE).click();
    cy.get("span").contains("is less than").click();
    cy.get("#radio-form-input").type(5);
    cy.get("button").contains("Filter").click();

    cy.get("p#currency-price-change-percentage").each((price) => {
      cy.wrap(price)
        .invoke("text")
        .then((price) => {
          return price.replace("+", "").replace("%", "");
        })
        .then(parseFloat)
        .should("be.lessThan", 5);
    });
  });

  it("filter price change percentage greater than value", () => {
    cy.get(FILTER_BUTTON).should("be.visible");
    cy.get(FILTER_BUTTON).click();
    cy.get(PRICE_CHANGE_PERCENTAGE).click();
    cy.get("span").contains("is greater than").click();
    cy.get("#radio-form-input").type(1);
    cy.get("button").contains("Filter").click();

    cy.get("p#currency-price-change-percentage").each((price) => {
      cy.wrap(price)
        .invoke("text")
        .then((price) => {
          return price.replace("+", "").replace("%", "");
        })
        .then(parseFloat)
        .should("be.greaterThan", 1);
    });
  });

  it("filter price change less than value", () => {
    cy.get(TABLE_VIEW_BUTTON).click();

    cy.get(FILTER_BUTTON).click();
    cy.get(PRICE_CHANGE).click();
    cy.get("span").contains("is less than").click();
    cy.get("#radio-form-input").type(50);
    cy.get("button").contains("Filter").click();

    cy.get("p#currency-price-change").each((price) => {
      cy.wrap(price)
        .invoke("text")
        .then((price) => {
          return price.replace("$", "").replace(",", "");
        })
        .then(parseFloat)
        .should("be.lessThan", 50);
    });
  });

  it("filter price change greater than value", () => {
    cy.get(TABLE_VIEW_BUTTON).click();

    cy.get(FILTER_BUTTON).click();
    cy.get(PRICE_CHANGE).click();
    cy.get("span").contains("is greater than").click();
    cy.get("#radio-form-input").type(1);
    cy.get("button").contains("Filter").click();

    cy.get("p#currency-price-change").each((price) => {
      cy.wrap(price)
        .invoke("text")
        .then((price) => {
          return price.replace("$", "").replace(",", "");
        })
        .then(parseFloat)
        .should("be.greaterThan", 1);
    });
  });
});
