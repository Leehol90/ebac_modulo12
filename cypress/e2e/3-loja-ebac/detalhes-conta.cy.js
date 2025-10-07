/// <reference types="cypress"/>

describe('Funcionalidade: Detalhes da conta', () => {

    beforeEach(() => {
        cy.visit('minha-conta/edit-account')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })

    });

    it('Deve completar detalhes da conta com sucesso', () => {
        cy.detalhesConta('augusto', 'Teixeira', 'jão')
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modif')
    });
});