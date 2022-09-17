// https://docs.cypress.io/api/table-of-contents

describe('HomeView', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080')
  })

  it('Visits HomeView url', () => {
    cy.contains('h1', 'Todo List - JSON Placeholder')
  })

  it('Open Detail Dialog', () => {
    cy.get('table').find('button').first().click()
    cy.contains('h1', 'Todo Detalhes')
  })
})
