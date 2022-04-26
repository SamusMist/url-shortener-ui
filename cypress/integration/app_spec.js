describe('Final assessment user flow', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/urls', { fixture: 'example.json' })
    cy.visit('http://localhost:3000')
  })

  it('When a user visits the page, they can view the page title and the existing shortened URLs', () => {
    cy.get('.url').first()
      .contains('http://localhost:3001/useshorturl/1')
  })

  it('When a user visits the page, they can view the Form with the proper inputs', () => {
    cy.get('form')
    cy.get('.title-input')
    cy.get('.url-input')
    cy.get('.submit-button').should('have.text', 'Shorten Please!')
  })

  it('When a user fills out the form, the information is reflected in the input fields', () => {
    cy.get('form')
    cy.get('.title-input').type('This is a title')
    cy.get('.url-input').type('This is a url')
  })

  it('When a user fills out and submits the form, the new shortened URL is rendered', () => {
    cy.get('form')
    cy.get('.title-input').type('This is a title')
    cy.get('.url-input').type('This is a url')
    cy.intercept('GET', 'http://localhost:3001/api/v1/urls', { fixture: 'example_2.json' })
    cy.get('button').click()
    cy.get('.url').contains('http://localhost:3001/useshorturl/2')
  })

})
