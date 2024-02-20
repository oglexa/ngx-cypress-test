/// <reference types="cypress" />




describe('homework', () => {
  it('task 1', () => {
    // Visit the website
    cy.visit('http://localhost:4200/pages/layout/stepper');

    // Assertion: Check if the page contains the expected text
    cy.get('.ng-star-inserted').contains('Step content #1').should('be.visible');
    cy.xpath('/html/body/ngx-app/ngx-pages/ngx-one-column-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-components/ngx-stepper/nb-card/nb-card-body/nb-stepper/div[2]/button[2]').first().click();
    cy.get('.ng-star-inserted').contains('Step content #2').should('be.visible');
    cy.xpath('/html/body/ngx-app/ngx-pages/ngx-one-column-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-components/ngx-stepper/nb-card/nb-card-body/nb-stepper/div[2]/button[2]').first().click();
    cy.get('.ng-star-inserted').contains('Step content #3').should('be.visible');
    cy.xpath('/html/body/ngx-app/ngx-pages/ngx-one-column-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-components/ngx-stepper/nb-card/nb-card-body/nb-stepper/div[2]/button[2]').first().click();
    cy.get('.ng-star-inserted').contains('Step content #4').should('be.visible');
  });
 
  it('task 2', () => {
    // Visit the website
    cy.visit('http://localhost:4200/pages/modal-overlays/dialog');
    
    cy.xpath('/html/body/ngx-app/ngx-pages/ngx-one-column-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-modal-overlays/ngx-dialog/div/div[5]/nb-card/nb-card-body/button').click();
    cy.xpath('//*[@id="cdk-overlay-0"]/nb-dialog-container/ngx-dialog-name-prompt/nb-card').should('be.visible');
    cy.xpath('//*[@id="cdk-overlay-0"]/nb-dialog-container/ngx-dialog-name-prompt/nb-card/nb-card-header').should('be.visible');
    cy.xpath('//*[@id="cdk-overlay-0"]/nb-dialog-container/ngx-dialog-name-prompt/nb-card/nb-card-body/input').should('be.visible');
    cy.xpath('//*[@id="cdk-overlay-0"]/nb-dialog-container/ngx-dialog-name-prompt/nb-card/nb-card-footer/button[1]').should('be.visible');
    cy.xpath('//*[@id="cdk-overlay-0"]/nb-dialog-container/ngx-dialog-name-prompt/nb-card/nb-card-footer/button[2]').should('be.visible')
  });

});