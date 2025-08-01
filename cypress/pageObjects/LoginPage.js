class LoginPage{
    elements = {
            usernameField: () => cy.get('#user-name'),
            passwordField: () => cy.get('#password'),
            loginButton:   () => cy.get('#login-button')
    }

    inputUsename(userName){
    this.elements.usernameField().type(userName);
    }
    
    inputPassword(password){
        this.elements.passwordField().type(password);
    }

    clickLogin(){
        this.elements.loginButton().click();
    }

    login(userName,password){
        this.inputUsename(userName);
        this.inputPassword(password);
        this.clickLogin();
    }
}

export default LoginPage;