describe("template spec", () => {
  it("uses custom text for the button label", () => {
    cy.mount(<button>Click me!</button>);
    cy.get("button").should("contains.text", "Click me!");
  });
});
