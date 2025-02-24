describe('Página de cadastro', () => {
  it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
    cy.adopetCadastrar('Pedro Paulo', 'pp@email.com', 'Senha123');
  })
})