describe( 'SauceLab: main page', () => {
  
it( 'loads', () => {
    cy.visit( 'https://automationintesting.online/#/ ');
} );

it( 'welcome modal appears', () => {
    cy.get('div.modal-body.welcome').should('be.visible') 
} );

it( 'users can navigate through the modal', () => {
  cy.get('div.modal-body.welcome').should('be.visible') 
  for (let i = 0; i < 4; i++) {
      cy.get ( 'button#next.btn.btn-outline-primary' ).click()
    }
  cy.get ( 'button#closeModal.btn.btn-outline-success' ).click()
} );

}); 
  