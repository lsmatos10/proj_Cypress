describe('API do Serverest', () => {

  let userId
  let email

  it('Criar usuário', () => {
    email = `teste_${Date.now()}@qa.com.br`

    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/usuarios',
      body: {
        nome: 'Ciclano de tal',
        email: email,
        password: 'inicio123',
        administrador: 'true'
      }
    }).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body.message).to.eq('Cadastro realizado com sucesso')

      userId = response.body._id
    })
  })

  it('Listar usuários', () => {
    cy.request({
      method: 'GET',
      url: 'https://serverest.dev/usuarios'
    }).then((response) => {
      expect(response.status).to.eq(200)
    })
  })

  it('Buscar usuário por ID', () => {
    cy.request({
      method: 'GET',
      url: `https://serverest.dev/usuarios/${userId}`
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body._id).to.eq(userId)
    })
  })

  it('Atualizar usuário', () => {
    cy.request({
      method: 'PUT',
      url: `https://serverest.dev/usuarios/${userId}`,
      body: {
        nome: 'ciclano atualizado',
        email: email,
        password: 'inicio123',
        administrador: 'true'
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.message).to.eq('Registro alterado com sucesso')
    })
  })

  it('Excluir Usuario', () => {
    cy.request({
        method: 'DELETE',
        url: `https://serverest.dev/usuarios/${userId}`,
    }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.message).to.eq('Registro excluído com sucesso')
    })

    })
  })

