describe("Home Page Tests", () => {
  it("Loads", () => {
    cy.visit("http://localhost:3000/");
  });

  it("Has Links", () => {
    cy.visit("http://localhost:3000/");

    cy.get("a h2").should('have.length.greaterThan', 3);
  });
});
