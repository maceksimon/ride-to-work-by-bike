import HeroImageStacked from '../HeroImageStacked.vue';
import texts from '../../../locales/en-US.toml';

describe('HeroImageStacked', () => {
  it('has h1 element', () => {
    cy.mount(HeroImageStacked);

    cy.get('h1').should('exist');
  });
  it('renders h1 with default English text', () => {
    const h1Text = texts.hero.title;
    cy.mount(HeroImageStacked);

    cy.get('h1').should('contain', h1Text);
  });
  it('renders imageMessage.png', () => {
    cy.mount(HeroImageStacked);

    cy.get('img')
      .should('be.visible')
      .should(($imgs) =>
        $imgs.map(
          (i, img: HTMLImageElement) =>
            expect(img.naturalWidth).to.be.greaterThan(0) &&
            expect(img.naturalHeight).to.be.greaterThan(0)
        )
      );
  });
});
