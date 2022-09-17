// https://docs.cypress.io/api/table-of-contents

describe('HomeView', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080')
  })
  it('Visits HomeView url', () => {
    cy.contains('h1', 'Todo List - JSON Placeholder')
  })
})
