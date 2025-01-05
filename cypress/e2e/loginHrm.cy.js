describe('cssLocatorsCode', () => {
    it('cssCode', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[name='username']").type("Admin")
        cy.get("input[name='password']").type("admin123")
        cy.get("button[type='submit']").click()
        cy.get("header[class='oxd-topbar'] h6").contains("Dashboard")
        cy.get()
    })
})   