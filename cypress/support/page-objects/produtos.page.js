class ProdutosPage{

    visitarUrl() {
        cy.visit('produtos')
    }

    buscarProduto(nomeProduto) {
        cy.get('[name="s"]').eq(1).type(nomeProduto)            //irá buscar por [name="s"] e irá
                                                                    //capturar o segundo (.eq(1)) elemento da página com essa descrição
        cy.get('.button-search').eq(1).click()                  //irá clicar no segundo elemento '.button-search' da página
    }

    buscarProdutoLista(nomeProduto){
        cy.get('.name > a')                                             
        .contains(nomeProduto)                         
        .click()      
    }

    visitarProduto(nomeProduto){
        const urlFormatada = nomeProduto.replace(/ /g, '-')     //para usar o visit não podemos separar palavras da variavel com espaços,
                                                                    //o replace é usado para substituir espaços em branco por traços, como na url
        cy.visit(`produtos/${urlFormatada}`)

    }

    addPdotutoCarrinho(produto, tamanho, cor, quantidade){
        cy.get('.button-variable-item-' + tamanho).click()
        cy.get('.button-variable-item-' + cor).click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “'+ produto)

    }

}

export default new ProdutosPage()