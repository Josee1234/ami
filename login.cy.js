describe('African Management Institute Automation', () => {
    beforeEach(() => {
        cy.visit('https://account-staging.africanmanagers.org/ami_auth/login')
        cy.title().should('eq', "African Management Initiative")
        cy.location('protocol').should('eq', 'https:')
    })
    it('Login with username', function() {
        cy.get('#user_login').type('jado')
        cy.get('#user_password').type('AMI1234')
        cy.get('.comn-flex-box > .btnRed').should('visible').click()
        //cy.url().should('contain', '/https://account-staging.africanmanagers.org/dashboard/home?')

    })
    it('Login with phone number', function() {
        cy.get('#user_login').type('0789533413')
        cy.get('#user_password').type('AMI1234')
        cy.get('.comn-flex-box > .btnRed').should('be.visible').click()
    })
   it('Login with active email', function() {
        cy.get('#user_login').type('josee.i@muraho.tech')
        cy.get('#user_password').type('AMI1234')
        cy.get('.comn-flex-box > .btnRed').should('be.visible').click()
    })
    it('Login with inactive account', function() {
        cy.get('#user_login').type('0783727181')
        cy.get('#user_password').type('AMI123422222222')
        cy.get('.comn-flex-box > .btnRed').should('be.visible').click()
        cy.contains('The username, email address, phone number or password entered is incorrect')
    })
    })