import { PORT_REACT_APP } from './../../../../config';

describe('Test generated DOM on page', () => {
  beforeEach(() => {
    cy.visit(`http://localhost:${PORT_REACT_APP}`)
  })
  it('The "h1" tag was generated with the correct content', () => {
    // https://on.cypress.io/should
    cy.get('.main-heading')
      .should('have.text', 'Datzit')
  })
})
