Cypress.Commands.add('accessWebsite', (url) => {
    cy.visit(url);
});

Cypress.Commands.add('enterNumberInFirstField', (number) => {
    cy.get('#sum1').type(number);
});

Cypress.Commands.add('enterNumberInSecondField', (number) => {
    cy.get('#sum2').type(number);
});

Cypress.Commands.add('clickButton', (buttonText) => {
    cy.contains('button', buttonText).click();
});

Cypress.Commands.add('checkResult', (expectedResult) => {
    cy.get('#addmessage').should('have.text', expectedResult);
});

describe('My Cypress Test', () => {
    it('should perform addition', () => {
        cy.accessWebsite('https://www.lambdatest.com/selenium-playground/simple-form-demo');
        cy.enterNumberInFirstField(5);
        cy.enterNumberInSecondField(10);
        cy.clickButton('Get Sum');
        cy.checkResult('15');
    });
});