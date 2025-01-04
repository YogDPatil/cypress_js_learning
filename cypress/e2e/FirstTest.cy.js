
describe('my first suit', function(){
    it('my first test case', function(){
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // verify the title of app
        cy.title().should('eq', 'OrangeHRM')
    })

    it('Validate title of the app', function(){
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('equal','OrangeHRM1')
    })
})