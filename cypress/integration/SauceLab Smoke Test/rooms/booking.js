

describe( 'SauceLab: book a room', () => {
  
  it( 'the page loads', () => {
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
  
  it( 'has all the correct room options ', () => {
    const options = [
      'Single',
      'Double',
      'Family',
      'Suite',
    ]
    options.forEach ((e) => {
      cy.get( 'div.row.hotel-room-info').contains( e )
      })
  } );
  
  it( 'users can select "Book a Room" option ', () => {
      //click the button
      cy.get ('button.btn.btn-outline-primary.float-right.openBooking').first().click() 
  } );
  
  it( 'users can view the calendar ', () => {
    //click the button
    cy.get ('div.rbc-month-view').should('exist')
    //users can select a calendar 
  } );
  
  it( 'users are required to fill in valid credentials', () => {
    const errors = [
      'BookingDates.checkin: must not be null',
      'BookingDates.checkout: must not be null',
      'Firstname: size must be between 3 and 18',
      'Lastname: size must be between 3 and 30',
      'Phone: size must be between 11 and 21', 
      'Phone: must not be empty', 
      'Firstname: Firstname should not be blank',
      'Email: must not be empty',
      'Lastname: Lastname should not be blank', 
    ]
    cy.get ('button.btn.btn-outline-primary.float-right.book-room').click()
    errors.forEach((e) => {
      cy.get ('div.alert.alert-danger').contains(e);  
    })
    
  } );
  
  // xit( 'character size for firstname and last must be between 3 and 18', () => {
  //   const errors = [
  //     'Firstname: size must be between 3 and 18',
  //     'Lastname: size must be between 3 and 30',
  //   ]
  //   cy.get ('input.form-control.room-firstname').type('Ro');
  //   cy.get ('input.form-control.room-lastname').type('Le');
  //   cy.get ('button.btn.btn-outline-primary.float-right.book-room').click()
  //   errors.forEach((e) => {
  //     cy.get ('div.alert.alert-danger').contains(e);  
  //   })
  
  // } );
  
  it( 'selecting a date is required before submiting form', () => {
    const errors = [
      'BookingDates.checkout: must not be null',
      'BookingDates.checkin: must not be null',
    ]
    //fill out forms
    cy.get ('input.form-control.room-firstname').type('Rosie');
    cy.get ('input.form-control.room-lastname').type('Le');
    cy.get ('input.form-control.room-email').type('rosietle2903@gmail.com');
    cy.get ('input.form-control.room-phone').type('703-111-1111');
    //users select book
    cy.get ('button.btn.btn-outline-primary.float-right.book-room').click()
    errors.forEach((e) => {
      cy.get ('div.alert.alert-danger').contains(e);  
    });
  } );
  
  
  it( 'users can cancel out of the form', () => {
    //fill out forms
    cy.contains( 'Cancel').click() 
    //cancelling the form would result in calendar being gone
    cy.get('div.rbc-month-view').should('not.exist')
  
  } );
  
}); 