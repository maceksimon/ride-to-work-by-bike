import TheHeader from '../TheHeader.vue';

describe('TheHeader', () => {
  it('has logo image with the right dimensions', () => {
    cy.mount(TheHeader);

    cy.get('.q-avatar img').should('have.attr', 'src');
    cy.get('img')
      .should('be.visible')
      .should(($imgs) =>
        $imgs.map(
          (i, img: HTMLImageElement) =>
            expect(img.naturalWidth).to.be.greaterThan(0) &&
            expect(img.naturalHeight).to.be.greaterThan(70)
        )
      );
  });

  it('has button with tooltip', () => {
    cy.mount(TheHeader);

    cy.get('.q-tooltip').should('not.exist');
    cy.get('.tooltip-button').should('be.visible').click();
    cy.get('.q-tooltip').should('exist');
  });

  it('has language button with active styling', () => {
    cy.mount(TheHeader);

    cy.get('.language-switcher--en')
      .should('have.class', 'is-active')
      .should('have.css', 'background-color', 'rgb(33, 33, 33)'); // #212121 manually rewritten to rgb
  });
});
