/// <reference types="cypress" />

describe('parent2', () => {
  // "context" is just an alias to "describe"
  // both used to group similar tests together
  context('inner2', () => {
    // test rail case ID "15"
    it('C15 works', () => {
      cy.wait(15000)
    })
  })
})