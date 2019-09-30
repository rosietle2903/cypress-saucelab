describe( 'SauceLab: contact us', () => {
  
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

  it( 'contact form exists ', () => {
    cy.get ('div.row.contact').should('exist'); 
  } );

  it( 'contact form requires valid credentials', () => {
    const errors = [
      'Phone: must not be blank',
      'Phone: size must be between 11 and 21',
      'Description: size must be between 20 and 2000',
      'Subject: size must be between 5 and 100',
      'Email: must not be blank',
      'Description: must not be blank',
      'Subject: must not be blank',
      'Name: must not be blank',
    ]
    cy.get ('button#submitContact.btn.btn-outline-primary.float-right').click() 
    errors.forEach((e) => {
      cy.get ('div.alert.alert-danger').contains(e);  
    })
    
  } );

  it( 'contact form submit successfully ', () => {
    cy.get ('input#name.form-control').type('Rosie'); 
    cy.get ('input#email.form-control').type('rosietle2903@gmail.com'); 
    cy.get ('input#phone.form-control').type('703-776-0271'); 
    cy.get ('input#subject.form-control').type('Testing'); 
    cy.get ('textarea#description.form-control').type('eLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'); 
    cy.get ('button#submitContact.btn.btn-outline-primary.float-right').click() 
    cy.contains ('Thanks for getting in touch')
  } );

  
  }); 