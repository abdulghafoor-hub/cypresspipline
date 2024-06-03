describe('template spec', () => {
  it('Login to Redactable', () => {
    cy.visit('dev.redactable.ai')
    cy.wait(1000);
    cy.get('#username').type('fawad+ff@clickaway.io');
    cy.get('#password').type('Redactable.1')
    cy.get('.custom-button').click()
    cy.wait(1000)
    cy.get('.introjs-skipbutton').click()
    cy.wait(1000)
    cy.get(':nth-child(1) > .cards__item > .cards__footer > .open-file').click()
    cy.get('.cdk-column-status > .mat-sort-header-container > .mat-sort-header-content').click()
    cy.get(':nth-child(3) > .cdk-column-fileName > .files-name-section > app-edit-file-name > :nth-child(1)') .click()
    //cy.get('#introJsWizardTourStep1 > .redaction__type__item__image').click()
    cy.get('.my-3 > .mat-mdc-form-field > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix')
     .type('1015447687')
     cy.get('.button--fill').click()
      })
})