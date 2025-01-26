


describe('dnd ingredient', function () {
    beforeEach(function () {
        cy.visit('http://localhost:3000');
    });

    it('drag bun top', function () {
        cy.wait(2000);
        cy.get('[data-testing=article]').first().trigger('dragstart');
        cy.get('[data-testing=bun-top-drag]').trigger('drop');
        cy.wait(2000);
    });



    it('drag bun bottom', function () {
        cy.wait(2000);
        cy.get('[data-testing=article]').first().trigger('dragstart');
        cy.get('[data-testing=bun-bottom-drag]').trigger('drop');
        cy.wait(2000);
    });


    it('drag ingr', function () {
        cy.wait(2000);
        cy.get('[data-testing=article]').eq(8).trigger('dragstart');
        cy.get('[data-testing=ing-drop]').trigger('drop');
        cy.wait(2000);
        cy.get('[data-testing=article]').eq(8).trigger('dragstart');
        cy.get('[data-testing=ing-drop]').trigger('drop');
        cy.wait(2000);
        cy.get('[data-testing=article]').eq(4).trigger('dragstart');
        cy.get('[data-testing=ing-drop]').trigger('drop')
    });

    
});