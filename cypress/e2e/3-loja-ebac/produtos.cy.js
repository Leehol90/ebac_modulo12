/// <reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')         //Na pagina 'produtos' do site 'lojaebac.com.br'
    });

    it('Deve selecionar um produto da lista', () => {       
        cy.get('.name > a')                                             //dentro da lista que contém os nomes dos elementos da página, escolha:
        //.first()                                                      //primeiro item da lista      
        //.last()                                                       //ultimo item da lista
        //.eq(2)                                                        //terceiro item da lista (0, 1, 2, ...)
        .contains('Ajax Full-Zip Sweatshirt')                         //Nome do elemento na lista
        .click()                                                        //e dê um clique neste elemento
        
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
    });
});