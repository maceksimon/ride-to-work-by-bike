// Use `cy.dataCy` custom command for more robust tests
// See https://docs.cypress.io/guides/references/best-practices.html#Selecting-Elements
import textsEn from '../../../locales/en-US.json';
import textsCs from '../../../locales/cs-CZ.json';

describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('has background image', () => {
    cy.get('.background-image').should('exist');
  });

  it('has English heading', () => {
    cy.get('h1').should('contain', textsEn.hero.title);
  });

  it('changes UI when CZ language is selected', () => {
    cy.get('.language-switcher--cs').click();

    cy.get('h1').should('contain', textsCs.hero.title);
  });

  it('changes URL parameter when CZ language is selected', () => {
    cy.get('.language-switcher--cs').click();

    cy.url().should('include', '?lang=cs');
  });
});

// Workaround for Cypress AE + TS + Vite
// See: https://github.com/quasarframework/quasar-testing/issues/262#issuecomment-1154127497
export {};
