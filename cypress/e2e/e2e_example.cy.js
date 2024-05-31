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

describe('Sum Form Test', () => {
    const testCases = [
        { first_number: '5', second_number: '10', expected_result: '15' },
        { first_number: '3', second_number: '7', expected_result: '10' },
        { first_number: '1', second_number: '1', expected_result: '2' },
        { first_number: '13', second_number: '1', expected_result: '14' },
        { first_number: '999', second_number: '1', expected_result: '1000' },
    ];

    testCases.forEach((testCase) => {
        it(`should add ${testCase.first_number} and ${testCase.second_number} to get ${testCase.expected_result}`, () => {
            // Access the website
            cy.accessWebsite('https://www.lambdatest.com/selenium-playground/simple-form-demo');

            cy.enterNumberInFirstField(testCase.first_number);
        cy.enterNumberInSecondField(testCase.second_number);
        cy.clickButton('Get Sum');
        cy.checkResult(testCase.expected_result);
        });
    });
});