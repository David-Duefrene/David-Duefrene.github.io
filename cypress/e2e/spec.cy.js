describe('quick snapshot test', () => {
  it('matches snapshot', () => {
    cy.visit('/')
	cy.get('body').snapshot()
  })
})
