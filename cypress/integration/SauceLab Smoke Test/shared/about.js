describe( 'SauceLab: main page', () => {
  
it( 'loads', () => {
    cy.visit( 'https://automationintesting.online/#/ ');
} );

it( 'saucelab main banner renders', () => {
  cy.get ('div.alert.alert-dismissible').should ('exist');
} );

it( 'users can close the banner', () => {
  cy.get ('.close').click( {force: true} ); 
  cy.get ('div.alert.alert-dismissible').should ('not.exist');

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
  