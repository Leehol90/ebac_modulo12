/*
O codigo escrito nesse arquivo irá rodar no cypress. 
Para poder utilizá-lo, baixar e executar o programa.
O começo do arquivo deve conter essas três barras.
o arquivo.cy.js é um arquivo cypress, que por sua vez é um arquivo json.
*/

/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {
    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        //cy.visit carrega uma url para fazer os testes
        cy.get('#username').type('Augusto@teste.com')
        //pega o campo 'usuario' e digita o texto 'Augusto@teste.com'
        cy.get('#password').type('teste@teste123')
        cy.get('.woocommerce-form > .button').click()
        //clica no botao 'login'

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, augusto')
        //Verifica se parte da mensagem no campo designado dentro do get é igual a mensagem 'Olá, augusto'
        //se for, retorna uma indicação de que o teste foi bem sucedido 
    })

    /*
    it.only('Deve exibir uma mensgagem de erro ao inserir usuário inválido', () => {
    o metodo only é usado quando se deseja rodar somenete aquele teste. 
    Ele é usado para fazer um teste especifico e depois deve ser apagado
    */
    it('Deve exibir uma mensgagem de erro ao inserir usuário inválido', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('zezinho@teste.com')
        cy.get('#password').type('teste@teste123')
        cy.get('.woocommerce-form > .button').click()
        /*
        Exemplo de caso que poderia ser usado:
        cy.get('.woocommerce-error > li').should('contain',
            'Endereço de e-mail desconhecido.')
        */

        //Outro exemplo usando .should(exist):
        cy.get('.woocommerce-error > li').should('exist')
        //Verifica se o campo acime existe apos a inserção dos dados invalidos.
        //Pela forma como a pagina foi projetada, esse campo apenas existe nesse caso

    });
    //Validação de senha inválida
    it.only('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('Augusto@teste.com')
        cy.get('#password').type('testeInvalido@')
        cy.get('.woocommerce-form > .button').click()

        //No caso a seguir são feitas duas validações:
        //É validada parte da mensagem de erro e
        //é validada a aparição do campo contendo a msg de erro
        cy.get('.woocommerce-error > li').should('contain', 
            'Erro: A senha fornecida para o e-mail')
        cy.get('.woocommerce-error > li').should('exist')

    })

})