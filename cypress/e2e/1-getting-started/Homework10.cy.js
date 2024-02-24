describe('homework', () => {
  

  it('task 1', ()=>{
    cy.visit('/pages/layout/stepper')
    
    cy.get('nb-stepper[orientation="horizontal"]').as('container');
    cy.get('@container').find('h3').as('title');
    cy.get('@container').find(`button`).contains('next').as('nextButton');


    cy.get('@title').should('have.text', 'Step content #1');
    cy.get('@nextButton').click();

    cy.get('@title').should('have.text', 'Step content #2');
    cy.get('@nextButton').click();

    cy.get('@title').should('have.text', 'Step content #3');
    cy.get('@nextButton').click();

    cy.get('@title').should('have.text', 'Step content #4');
  });
 
  it('task 2', () => {
    cy.visit('/pages/modal-overlays/dialog')
    
    cy.get('nb-card.form-input-card').eq(0).as('container2');
    cy.get('nb-card').as('container3');
    cy.get('@container2').find('button').contains('Enter Name').as('enterNameBtn');
    cy.get('@enterNameBtn').click();
 
    cy.get('@container3').contains('Enter your nam').as('modalTitle')
    cy.get('@container3').find(`input`).as('input')
    cy.get('@container3').find(`button`).eq(5).as('cancelBtn')
    cy.get('@container3').find(`button`).eq(6).as('submitBtn')
    cy.get('@modalTitle').should('have.text', 'Enter your name');
    cy.get('@container3').should('be.visible');
    cy.get('@container3').each(() => {
      cy.get('@cancelBtn').should('be.visible');
      cy.get('@submitBtn').should('be.visible');
  });

})
})