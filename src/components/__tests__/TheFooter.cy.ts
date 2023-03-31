import TheFooter from '../TheFooter.vue';

describe('TheFooter', () => {
  it('shows social icons', () => {
    cy.mount(TheFooter);

    cy.get('.bi-facebook').should('be.visible');
    cy.get('.bi-instagram').should('be.visible');
    cy.get('.bi-twitter').should('be.visible');
    cy.get('.bi-youtube').should('be.visible');
  });
});
