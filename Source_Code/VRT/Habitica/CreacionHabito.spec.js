context('Creacion de Habito', () => {

    it('makes a wrong login attemp', () => {
        cy.visit('https://habitica.com/login')

        cy.get('#usernameInput').type('icedream93').should('have.value', 'icedream93');
        cy.get('#passwordInput').type('metropolis1');

        cy.get('.btn-info[type="submit"]').click()
        cy.wait(2000)        

        cy.screenshot()
        cy.get('[placeholder="Añadir una Hábito"]').type('habito de prueba{enter}');        
        cy.screenshot()      
      })
});
