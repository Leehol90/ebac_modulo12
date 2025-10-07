/// <reference types="cypress"/>

const { fa } = require('@faker-js/faker');

//variavel perfil, recebe dados contidos no arquivo fixture
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    it('Deve fazer login com sucesso', () => {
        
        cy.get('#username').type('Augusto@teste.com')
        cy.get('#password').type('teste@teste123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, augusto')
    });
    it('Deve exibir uma mensgagem de erro ao inserir usuário inválido', () => {
       
        cy.get('#username').type('zezinho@teste.com')
        cy.get('#password').type('teste@teste123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('exist')
    });
    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
       
        cy.get('#username').type('Augusto@teste.com')
        cy.get('#password').type('testeInvalido@')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 
            'Erro: A senha fornecida para o e-mail')
        cy.get('.woocommerce-error > li').should('exist')
    });
    //Pegando os dados do arquivo fixture, usando a variavel declarada acima, chamada perfil
    it('Deve fazer login com sucesso - Usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, augusto')
    });
    //Pegando os dados do arquivo fixture, usando a função fixture
    it('Deve fazer login com sucesso - Usando massa de dados', () => {
        cy.fixture('perfil').then( dados => {           //Criacao da variavel 'dados'
            cy.get('#username').type(dados.usuario)
            //log: false: irá esconder a senha na hora da execução, caso houver dados sensíveis
            cy.get('#password').type(dados.senha, {log: false}) 
        })
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, augusto')
    });
    it.only('Deve fazer login com sucesso - Usando comandos customizados', () => {
        //comando login criado na pasta commands
        cy.login('Augusto@teste.com', 'teste@teste123')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, augusto')
    });
    
})