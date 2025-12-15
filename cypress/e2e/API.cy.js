describe('API do Serverest', () => {

  let userId
  let email

  it('Criar usuário', () => {
    cy.fixture('usuario').then(function (usuario) {
        const user = usuario.cria_usuario
        cy.cria_user(user)
  
    })
  })

  it('Listar usuários', () => {
    cy.api({
      method: 'GET',
      url: 'https://serverest.dev/usuarios'
    }).then((response) => {
      expect(response.status).to.eq(200)
    })
  })

  it('Buscar usuário por ID', () => {
    cy.api({
      method: 'GET',
      url: `https://serverest.dev/usuarios/${Cypress.env('id')}`
    }).then((response) => {
      expect(response.status).to.eq(200)
    })
  })

  it('Atualizar usuário', () => {
    cy.api({
      method: 'PUT',
      url: `https://serverest.dev/usuarios/${Cypress.env('id')}`,
      body: {
        "nome": 'ciclano atualizado',
        "email": "email12@teste.com.br",
        "password": 'inicio123',
        "administrador": 'true'
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.message).to.eq('Registro alterado com sucesso')
    })
  })

  it('Excluir Usuario', () => {
    cy.api({
        method: 'DELETE',
        url: `https://serverest.dev/usuarios/${Cypress.env('id')}`,
    }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.message).to.eq('Registro excluído com sucesso')
    })

    })
  })

