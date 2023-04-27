describe('Form page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8000/form');
  });

  it('Send form', () => {
    cy.getByData('firstName').type('John');
    cy.getByData('secondName').type('Wick');
    cy.getByData('date').type('2020-05-24');
    cy.getByData('country').select('Belarus');
    cy.getByData('Male').click();
    cy.getByData('photo').selectFile({
      contents: Cypress.Buffer.from('file contents'),
      fileName: 'file.png',
      lastModified: Date.now(),
    });
    cy.getByData('check').click();
    cy.getByData('Submit').click();
    cy.getByData('message').should('exist');
    cy.getByData('person-card').should('exist');
    cy.getByData('person-card').should('exist').contains('John Wick');
    cy.getByData('person-card').should('exist').contains('Belarus');
    cy.getByData('person-card').should('exist').contains('2020-05-24');
  });
  it('Send empty form', () => {
    cy.getByData('Submit').click();
    cy.getByData('message').should('not.exist');
    cy.getByData('person-card').should('not.exist');
    cy.getByData('firstName-error').should('exist');
    cy.getByData('secondName-error').should('exist');
    cy.getByData('date-error').should('exist');
    cy.getByData('country-error').should('exist');
    cy.getByData('gender-error').should('exist');
    cy.getByData('photo-error').should('exist');
    cy.getByData('check-error').should('exist');
  });
});
