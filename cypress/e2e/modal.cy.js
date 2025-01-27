


describe('modal ingredient open close', function () {


    beforeEach(function () {
        cy.visit('');
    });



    it('open modal close overlay', function () {
        cy.get('[data-testing=link]').first().click();
        cy.get('[data-testing=close-overlay]').click('topLeft');

    });



    it('open modal close cross', function () {
        cy.get('[data-testing=link]').first().click();
        cy.get('[data-testing=close-cross]').click('center');

    });




});