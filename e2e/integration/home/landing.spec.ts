describe('Home App - Landing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should display a website with one header, one button and a select menu', () => {
    cy.get('h1').should('have.length', 1)
    cy.get('h1').first().should('have.text', 'Johand')
    cy.get('p').should('have.length', 1)
    cy.get('p').last().should('have.text', 'Yes... This is it. A website.')
    cy.get('select').should('have.length', 1)
  })
})
