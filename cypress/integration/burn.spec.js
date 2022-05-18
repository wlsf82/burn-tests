describe('A test suite', () => {
  beforeEach(() => cy.visit('./src/index.html'))

  it('waits for heading 1', () => {
    cy.contains('h1', 'Sample App')
  })

  it('wait for paragraph', () => {
    cy.contains('p', 'I finally appeared.', { timeout: 10000 })
  })
})
