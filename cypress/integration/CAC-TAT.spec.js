/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    this.beforeEach(function (){
        cy.once('uncaught:exception', () => false);
        // cy.visit('https://www.vr.com.br/')
        cy.visit('./src/index.html')
    })
    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
    })

    
    it.only('preenche os campos obrigatórios e envia o formulário',function(){
        const longText = 'Teste, Teste Teste, Teste Teste, Teste Teste, Teste Teste, Teste Teste, Teste Teste, Teste Teste, Teste Teste, Teste Teste, Teste'
        
        cy.get('#firstName').type('ozeias')
        cy.get('#lastName').type('silva')
        cy.get('#email').type('ozeiastet@gmail.com')
        cy.get('#open-text-area').type(longText, { delay:0 })
        cy.get('button[type="submit"]').click()

        cy.get('.success').should('be.visible')
       
  })

 
  it.only('exibe mensagem de erro ao submeter o formulario com um email com formatacao',function(){

    cy.get('#firstName').type('ozeias')
    cy.get('#lastName').type('silva')
    cy.get('#email').type('ozeiastet@gmail;com')
    cy.get('#open-text-area').type('Teste')
    cy.get('button[type="submit"]').click()

    cy.get('.error').should('be.visible')
   
})

  it.only('campo teleone continia vazio quando preenchido com o valor não-númerico',function(){

    cy.get('#phone').type('ozeias').should('have.value', '')
   
})

  it.only('campo teleone continia vazio quando preenchido com o valor não-númerico',function(){

    cy.get('#firstName').type('ozeias')
    cy.get('#lastName').type('silva')
    cy.get('#email').type('ozeiastet@gmail.com')
    cy.get('#phone-checkbox').click()
    cy.get('#open-text-area').type('Teste')
    cy.get('button[type="submit"]').click()

    cy.get('.error').should('be.visible')
   
})


 it.only('preenche e limpa os campos nome sobrenome, email e telefone',function(){

    cy.get('#firstName')
      .type('ozeias')
      .should('have.value', 'ozeias')
      .clear()
      .should('have.value', '')
})


 it.only('exibe mensagem de erro ao submeter o formulario sem preencher os campos obrigatorios',function(){

    cy.get('button[type="submit"]').click()
    cy.get('.error').should('be.visible')
})


 it.only('envia o formulario com sucesso customizado',function(){
 cy.fillMandatoryFildsAndSubimit() 
 cy.get('.success').should('be.visible')
  
})


it.only('usando o elemento contains',function(){
    cy.get('#firstName').type('ozeias')
    cy.get('#lastName').type('silva')
    cy.get('#email').type('ozeiastet@gmail.com')
    cy.get('#phone-checkbox').click()
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()

    cy.get('.error').should('be.visible')
     
   })

    
   it.only('Abrindo em nova Aba',function(){
    cy.get('#privacy a').should('have.attr', 'target', '_blank')
   })

   it.only('Abrindo em nova Aba dois',function(){
    cy.get('#privacy a')
      .invoke('removeAttr', 'target')
      .click()

    cy.contains('Talking About Testing').should('be.visible')  
     
   })


   it.only('Seleciono produto Youtube',function(){
    cy.get('#product').select('YouTube')
    .should('have.value', 'youtube')
   })


   it.only('Seleciono produto pelo seu valor (value)',function(){
    cy.get('#product').select('mentoria')
    .should('have.value', 'mentoria')
   })

    it.only('Seleciono produto pelo seu Indice',function(){
    cy.get('#product').select(1)
    .should('have.value', 'blog')
   })


   it.only('marca o tipo de antendimento "Feedback"',function(){
    cy.get('input[type="radio"][value="feedback"]').check()
    .should('have.value', 'feedback')
    
   })


   it.only('marca o tipo de antendimento',function(){
    cy.get('input[type="radio"]')
    .should('have.length', 3)
    .each(function($radio) {
      cy.wrap($radio).check()
      cy.wrap($radio).should('be.checked')
    })
   })


   it.only('marca  ambos checkboxes, depois desmarca o ultimo',function(){
    cy.get('input[type="checkbox"]')
      .check()
      .last()
      .uncheck()
      .should('not.be.checked')
    })
     
    
    it.only('Seleciona um arquivo da pasta fixtures',function(){
      cy.get('input[type="file"]')
      .should('not.have.value')
      .selectFile('./cypress/fixtures/example.json') 
      .should(function($input) {
       expect($input [0].files[0].name).to.equal('example.json')
      })
      
      })
    


})