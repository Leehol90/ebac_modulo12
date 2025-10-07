/// <reference types="cypress"/>
import { faker } from "@faker-js/faker";

describe('Funcionalidade: Cadastro', () => {

    beforeEach(() => {
        cy.visit('minha-conta')    
    });

      it.only('Deve completar o cadastro com sucesso - usando variáveis', () => {

        var nome = faker.person.firstName()
        var sobrenome = faker.person.lastName()
        var email = faker.internet.email({firstName: nome, lastName: sobrenome})

        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type('06_10_2025_teste')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nome)
        cy.get('#account_last_name').type(sobrenome)
        cy.get('.woocommerce-Button').click()

    });
});