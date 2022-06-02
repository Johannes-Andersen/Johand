describe('Admin App - Landing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3002/admin')
  })

  it('should display the website with one header and one button', () => {
    cy.get('h1').should('have.length', 1)
    cy.get('h1').first().should('have.text', 'Admin // TODO')
    cy.get('button').should('have.length', 1)
    cy.get('button').last().should('have.text', 'Boop!')
  })
})
