describe('Home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8000');
  });

  it('Search work correct at home page', () => {
    cy.getByData('gallery-heading').contains(/gallery/i);
  });
});
