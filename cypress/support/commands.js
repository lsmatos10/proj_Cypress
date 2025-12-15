Cypress.Commands.add('cria_user', (user) => {
    cy.api({
      method: 'POST',
      url: 'https://serverest.dev/usuarios',
      body:user
    }).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body.message).to.eq('Cadastro realizado com sucesso')
        Cypress.env('id', response.body._id)
    })
})