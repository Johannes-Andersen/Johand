describe('Blog App - Landing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001/blog')
  })

  it('should display a website with one header and one button', () => {
    cy.get('h1').should('have.length', 1)
    cy.get('h1').first().should('have.text', 'Blog // TODO')
    cy.get('button').should('have.length', 1)
    cy.get('button').last().should('have.text', 'Boop!')
  })
})
