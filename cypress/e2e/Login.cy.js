import LoginPage from '../pageObjects/LoginPage';

describe('Login',()=>{
  const loginPage = new LoginPage();

  beforeEach(() =>{
    cy.visit(Cypress.env('API_BASE_URL'));
  });

  it('Validate login with correct credentials',()=>{
    loginPage.login(Cypress.env('USERNAME'),Cypress.env('PASSWORD'));
    cy.get('[class="app_logo"]').should('be.visible');
    //cy.log(Cypress.env('USERNAME'));
  })

  it('Login Login with incorrect credentials',()=>{
    loginPage.login('standard_user','secret');
    cy.get('[class="error-button"]').should('be.visible')
    cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service');
  })

})