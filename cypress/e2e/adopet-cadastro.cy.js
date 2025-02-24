import { usuarios } from '../fixtures/adopet-usuarios.json'

describe('Página de cadastro', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
        cy.get('[data-test="register-button"]').click();
    })
    usuarios.forEach(usuario => {
        it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário',
        () => {
            cy.adopetCadastrar(usuario.name, usuario.email, usuario.password);
        })
    })
})