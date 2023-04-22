describe('Home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8000');
    cy.window().trigger('unload');
  });
  context('Gallery section', () => {
    it('Enter text in search-field', () => {
      cy.getByData('modal').should('exist');
      cy.getByData('gallery-heading').contains(/gallery/i);
      cy.getByData('search').type('Mone{enter}');
      cy.getByData('loader').should('not.exist');
      cy.getByData('picture-card').should('have.length', 10);
      cy.getByData('picture-card').should('have.length', 10).eq(0).click();
      cy.getByData('modal').should('exist');
      cy.getByData('close').click();
      cy.getByData('modal').should('not.be.visible');
    });
  });
  context('Header', () => {
    it('Navigate to form page and back', () => {
      cy.getByData('form-link').click();
      cy.location('pathname').should('eq', '/form');
      cy.getByData('form-title').should('exist');
      cy.getByData('home-link').click();
      cy.getByData('gallery-heading').should('exist');
    });
  });
});
