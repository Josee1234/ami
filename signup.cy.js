describe('African Management Institute Automation', () => {
    beforeEach(() => {
        cy.visit('https://account-staging.africanmanagers.org/ami_auth/login')
        cy.title().should('eq', "African Management Initiative")
        cy.location('protocol').should('eq', 'https:')
    })
    it.only('Verify if User can sign up with no code', function() {
        cy.get('.comn-flex-box > .btnGreen').should('be.visible').click()
        cy.contains('Welcome to AMI Learning Platform!')
        cy.get('.modal-body > :nth-child(4) > :nth-child(1) > .btnRed').should('be.visible').click()
        cy.get('#registration_form_profile_first_name').type('Celine')
        cy.get('#registration_form_profile_last_name').type('Karangwa')
        cy.get('#countries-input-0').click()
        cy.get('.form-group').type('4843458247')
        cy.wait('#registration_form_name').type('celineka')
        cy.get('#reg_user_email').type('celine2023@gmail.com')
        cy.get('#registration_form_password').type('AMI1234')
        cy.get('#registration_form_password_confirmation').type('AMI1234')
        cy.get('class="text-body-small-bold text-color-dark-4"').click()
        cy.get('.activation-boolean-box > :nth-child(2) > label').click()
        cy.get('.mr-4 > label').click()
        cy.get('#registration_form_activation_code').type('123456')
        cy.get('type="checkbox"').click()
        cy.get('#signup-button').should('be.visible').click()
        cy.contains('Error creating user account')
    })


    it('Verify if User is not created', function() {
        cy.get('.comn-flex-box > .btnGreen').should('be.visible').click()
        cy.contains('Welcome to AMI Learning Platform!')
        cy.get('.modal-body > :nth-child(4) > :nth-child(1) > .btnRed').should('be.visible').click()
        cy.get('#registration_form_profile_first_name').type('Uwase')
        cy.get('#registration_form_profile_last_name').type('Aimee')
        cy.get('#profile_phone').should('be.visible').type('4843458243')
        cy.get('#registration_form_name').type('QueenU1')
        cy.get('#reg_user_email').type('aimee1233@jr.org')
        cy.get('#registration_form_password').type('aimee123')
        cy.get('#registration_form_password_confirmation').type('aimee123')
        cy.get('.activation-boolean-box > :nth-child(2) > label').click()
        cy.get('.mr-4 > label').click()
        cy.get('#registration_form_activation_code').type('123456')
        cy.get('#registration_form_tos').click()
        cy.get('#signup-button').should('be.visible').click()
        cy.contains('Error creating user account')
    })
    it('Sign Up with No Code', function() {
        cy.get('.comn-flex-box > .btnGreen').should('be.visible').click()
        cy.contains('Welcome to AMI Learning Platform!')
        cy.get('.btn').should('be.visible').click()
    })

})
