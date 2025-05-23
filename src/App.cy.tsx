import App from './App';

describe('LoginForm', () => {
  it('should redirect to welcome screen when credentials are correct', () => {
    cy.mount(<App />);
    cy.contains('Username').find('input').type('testuser');
    cy.contains('Password').find('input').type('testpassword');
    cy.intercept('POST', 'http://localhost:3000/auth', {
      statusCode: 200,
      body: {
        message: 'Authenticated',
      },
    });
    cy.get('button').contains('Login').as('loginButton').click();
    cy.contains('Welcome testuser!')
  });

  it('should show error message when credentials are incorrect', () => {
    cy.mount(<App />);
    cy.contains('Username').find('input').type('baduser');
    cy.contains('Password').find('input').type('badpassword');
    cy.intercept('POST', 'http://localhost:3000/auth', {
      statusCode: 401,
      body: {
        message: 'Bad username or password',
      },
    });
    cy.get('button').contains('Login').as('loginButton').click();
    cy.contains('Bad username or password');
  });
});
