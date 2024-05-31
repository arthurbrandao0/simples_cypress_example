describe('API Test', () => {
    it('should retrieve available pets', () => {
        cy.request({
            method: 'GET',
            url: 'https://petstore.swagger.io/v2/pet/findByStatus',
            qs: {
                status: 'available'
            },
            headers: {
                accept: 'application/json'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body[0].id).to.be.a('number');
        });
    });
});