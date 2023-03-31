// Use `cy.dataCy` custom command for more robust tests
// See https://docs.cypress.io/guides/references/best-practices.html#Selecting-Elements

describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('has background image', () => {
    cy.get('.background-image').should('exist');
  });

  it('has English heading', () => {
    cy.get('h1').should(
      'contain',
      "We'll let you know as soon as we put out another call"
    );
  });

  it('changes UI when CZ language is selected', () => {
    cy.get('.language-switcher--cs').click();

    cy.get('h1').should(
      'contain',
      'Dáme vám vědět, jakmile vypíšeme další výzvu'
    );

    cy.url().should('include', '?lang=cs');
  });
});

// Workaround for Cypress AE + TS + Vite
// See: https://github.com/quasarframework/quasar-testing/issues/262#issuecomment-1154127497
export {};
