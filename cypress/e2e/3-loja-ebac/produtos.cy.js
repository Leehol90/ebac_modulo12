/// <reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')         
    });

    it('Deve selecionar um produto da lista', () => {       
        cy.get('.name > a')                                             
        .contains('Ajax Full-Zip Sweatshirt')                         
        .click()                                                        
        
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
    });
});