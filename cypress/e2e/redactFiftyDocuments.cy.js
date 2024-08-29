// describe('template spec', () => {
//   it('Login to Redactable', () => {
//     cy.visit('dev.redactable.ai')
//     cy.wait(1000);
//     cy.get('#username').type('fawad+ff@clickaway.io');
//     cy.get('#password').type('Redactable.1')
//     cy.get('.custom-button').click()
//     cy.wait(1000)
//     cy.get('.introjs-skipbutton').click()
//     cy.wait(1000)
//     cy.get(':nth-child(1) > .cards__item > .cards__footer > .open-file').click()
//     cy.get('.cdk-column-status > .mat-sort-header-container > .mat-sort-header-content').click()
//     cy.get(':nth-child(3) > .cdk-column-fileName > .files-name-section > app-edit-file-name > :nth-child(1)') .click()
//     //cy.get('#introJsWizardTourStep1 > .redaction__type__item__image').click()
//     cy.get('.my-3 > .mat-mdc-form-field > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix')
//      .type('1015447687')
//      cy.get('.button--fill').click();
//       })
// })/// <reference types="Cypress" />
describe('template spec', () => {
  it('Login to Redactable', () => {
    cy.visit('https://uat.redactable.ai')
   //cy.get('#username').type('uqg3609@vogco.com').wait(3000)
   // cy.get('#username').type('tba79759@zccck.com').wait(3000)
    cy.get('#username').type('fawad+test@clickaway.io').wait(3000)
    cy.get('#password').type('Test@1234')
    cy.get('.custom-button').click()
    cy.wait(4000)
    cy.get('.introjs-skipbutton').click()
    cy.wait(1000)
    cy.get(':nth-child(1) > .cards__item > .cards__footer > .open-file').click()
    .wait(3000)
    

    for (let i = 0; i < 20; i++) {
      cy.get('.cdk-column-status > .mat-sort-header-container > .mat-sort-header-content').dblclick()
      cy.get(':nth-child(1) > .cdk-column-fileName > .files-name-section > app-edit-file-name > :nth-child(1) > .mat-mdc-tooltip-trigger > .file-name-wrapper > .file-name').click()
      cy.wait(10000)
      cy.get('.btn__icon__close__icon').click()
      if(i==0){ cy.get('.introjs-skipbutton').click()}
      cy.get('.tools > :nth-child(5)').click({force: true})
      cy.get('[data-page-number="1"]')
        .trigger('mousedown', 200, 200, { force: true })
        .trigger('mousemove', 400, 200, { force: true })
        .trigger('mousemove', 400, 400, { force: true })
        .trigger('mousemove', 200, 400, { force: true })
        .trigger('mouseup', 200, 400, { force: true });
      cy.wait(5000)
      cy.get('.mat-mdc-tooltip-trigger > .btn__main > .label').click().wait(6000)
      cy.get('.close').click().wait(5000)
      cy.get('.navigate-back').click().wait(2000)
      cy.get('.pdf__btn--dark').click()
      cy.wait(2000)
      if(i==0){ cy.get('.introjs-skipbutton').click()}
    }

  })
})