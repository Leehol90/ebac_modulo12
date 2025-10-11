/// <reference types="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl() 
        
    });

    it('Deve selecionar um produto da lista', () => {       
        let produto = 'Ariel Roll Sleeve Sweatshirt'
        produtosPage.buscarProdutoLista(produto)
        cy.get('#tab-title-description > a').should('contain', produto)
    });
    it('Deve buscar um produto com sucesso', () => {
        let produto = 'Ariel Roll Sleeve Sweatshirt'       
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
    });
    it('Deve visitar a página do produto', () => {     
        let produto = 'Ariel Roll Sleeve Sweatshirt'
        produtosPage.visitarProduto(produto)
        cy.get('.product_title').should('contain', produto)
    });
    it('Deve adicionar produto ao carrinho', () => {       
        let produto = 'Ariel Roll Sleeve Sweatshirt'
        produtosPage.buscarProdutoLista(produto)
        produtosPage.addPdotutoCarrinho(produto, 'L', 'Purple', 3)
    });

    it.only('Deve adicionar produto ao carrinho - Buscando da massa de dados', () => {       
        const num = 2
        cy.fixture('produtos').then(dados=>{
            produtosPage.buscarProdutoLista(dados[num].nomeProduto)
            produtosPage.addPdotutoCarrinho(dados[num].nomeProduto
                ,dados[num].tamanho, dados[num].cor, dados[num].quantidade)
        })
    });

});