import NewsCard from '../NewsCard.vue';
import texts from '../../../locales/en-US.json';

describe('NewsCard', () => {
  it('The card data', () => {
    cy.mount(NewsCard, {
      props: {
        card: {
          id: '1',
          datePublished: new Date('2022-09-14T13:42:44+00:00'),
          url: '/news/1',
          image: 'https://via.placeholder.com/400x300',
        },
      },
    });

    cy.get('.card-news__title').should('contain', texts.slider.card['1'].title);
    cy.get('.card-news__date').should('contain', '9/14/2022');
    cy.get('a')
      .should('have.attr', 'href')
      .should((href) => {
        expect(href).to.eq('/news/1');
      });
  });
  it('renders placeholder image', () => {
    cy.mount(NewsCard, {
      props: {
        card: {
          id: '1',
          datePublished: new Date('2022-09-14T13:42:44+00:00'),
          url: '#',
          image: 'https://via.placeholder.com/400x300',
        },
      },
    });

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
