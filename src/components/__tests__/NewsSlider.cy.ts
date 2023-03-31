import NewsSlider from '../NewsSlider.vue';
import texts from '../../../locales/en-US.json';

describe('NewsSlider', () => {
  it('renders 4 slides', () => {
    cy.mount(NewsSlider, {
      props: {
        cards: [
          {
            id: '1',
            datePublished: new Date('2022-09-27T13:42:44+00:00'),
            url: '#',
            image: 'https://via.placeholder.com/400x300',
          },
          {
            id: '2',
            datePublished: new Date('2022-09-22T13:42:44+00:00'),
            url: '#',
            image: 'https://via.placeholder.com/400x300',
          },
          {
            id: '3',
            datePublished: new Date('2022-09-14T13:42:44+00:00'),
            url: '#',
            image: 'https://via.placeholder.com/400x300',
          },
          {
            id: '4',
            datePublished: new Date('2022-09-14T13:42:44+00:00'),
            url: '#',
            image: 'https://via.placeholder.com/400x300',
          },
          {
            id: '3',
            datePublished: new Date('2022-09-14T13:42:44+00:00'),
            url: '#',
            image: 'https://via.placeholder.com/400x300',
          },
          {
            id: '4',
            datePublished: new Date('2022-09-14T13:42:44+00:00'),
            url: '#',
            image: 'https://via.placeholder.com/400x300',
          },
        ],
      },
    });

    cy.get('.swiper-slide:nth-child(4)').should('be.visible');
    cy.get('.swiper-slide:nth-child(5)').should('not.be.visible');
  });

  it('moves on click', () => {
    cy.mount(NewsSlider, {
      props: {
        cards: [
          {
            id: '1',
            datePublished: new Date('2022-09-27T13:42:44+00:00'),
            url: '#',
            image: 'https://via.placeholder.com/400x300',
          },
          {
            id: '2',
            datePublished: new Date('2022-09-22T13:42:44+00:00'),
            url: '#',
            image: 'https://via.placeholder.com/400x300',
          },
          {
            id: '3',
            datePublished: new Date('2022-09-14T13:42:44+00:00'),
            url: '#',
            image: 'https://via.placeholder.com/400x300',
          },
          {
            id: '4',
            datePublished: new Date('2022-09-14T13:42:44+00:00'),
            url: '#',
            image: 'https://via.placeholder.com/400x300',
          },
          {
            id: '3',
            datePublished: new Date('2022-09-14T13:42:44+00:00'),
            url: '#',
            image: 'https://via.placeholder.com/400x300',
          },
          {
            id: '4',
            datePublished: new Date('2022-09-14T13:42:44+00:00'),
            url: '#',
            image: 'https://via.placeholder.com/400x300',
          },
        ],
      },
    });

    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide:nth-child(1)').should('not.be.visible');
    cy.get('.swiper-slide:nth-child(5)').should('be.visible');
  });
});
