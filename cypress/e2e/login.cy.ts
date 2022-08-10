import Factory from '../factory/factory';

describe('TESTING ROUTE -> /login', () => {
  it('User can send form inputs', () => {
    const newUser = Factory.SignUp();

    cy.intercept({
      method: 'GET',
      url: '/login',
    }).as('signup');

    cy.visit('http://localhost:5173/login');

    cy.get('input[name="email"]').type(newUser.email);
    cy.get('input[name="profile"]').type(newUser.profile);
    cy.get('input[name="name"]').type(newUser.name);
    cy.get('input[name="password"]').type(newUser.password);
    cy.get('input[name="confirmPassword"]').type(newUser.confirmPassword);

    cy.get('button[type="submit"]').click();

    cy.wait('@signup').then((interception) => {
      const notNull = interception.response ? true : false;
      if (interception.response) {
        expect(interception.response.statusCode).to.equal(200);
      }
      expect(notNull).to.equal(true);
    });
  });
});
