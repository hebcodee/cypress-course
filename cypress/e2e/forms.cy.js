describe('forms teste', () => {
    beforeEach(() => {
        cy.visit('/forms')
    })
    it('Forms are corrects', () => {
        cy.contains(/Testing Forms/i)
        cy.getDataTest('form-test').find('input').type('heb@gmail.com').as('subscribe-form')
        cy.contains(/Successfully subbed/i).should('not.exist')
        cy.getDataTest('button-form').click()
        cy.contains(/Successfully subbed/i).should('exist')
        cy.wait(3000)
        cy.contains(/Successfully subbed/i).should('not.exist')
        
        cy.getDataTest('form-test').find('input').type('heb@gmail.io')
        cy.getDataTest('button-form').click()
        cy.contains(/Invalid email/i).should('exist')
        cy.wait(3000)
        cy.contains(/Invalid email/i).should('not.exist')
        
        cy.getDataTest('button-form').click()
        cy.contains(/fail!/i).should('exist')
        cy.wait(3000)
        cy.contains(/fail!/i).should('not.exist')
    })
})