


describe('dnd ingredient', function () {
    beforeEach(function () {
        cy.visit('');
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
        cy.get('[data-testing=article]').as('dragIngredients'); 
        cy.get('[data-testing=ing-drop]').as('dropElement');
        cy.wait(2000);
        cy.get('@dragIngredients').eq(8).trigger('dragstart');
        cy.get('@dropElement').trigger('drop');
        cy.wait(2000);
        cy.get('@dragIngredients').eq(8).trigger('dragstart');
        cy.get('@dropElement').trigger('drop');
        cy.wait(2000);
        cy.get('@dragIngredients').eq(4).trigger('dragstart');
        cy.get('@dropElement').trigger('drop')
    });

    
});