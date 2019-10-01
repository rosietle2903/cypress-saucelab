cypress-saucelab
Smoke Tests for SauceLab: https://automationintesting.online/#/

*How to run the tests*

- Install Cypress
- Navigate to the directory where the tests reside and run npx cypress open
- There is a sample file preview.gif in the repo to demo the tests

*Tests*

This smoke test suite provides coverage for the following features on the page:

Main:
- the page loads successfuly
- the modal appears on the page
- users are able to navigate throught the modal
- calendar exists for users to select a date
- page banner renders
- users are able to close the banner

Forms: (contact us & book a room forms)
- the form can submit with the correct information (users are able to book a room)
- form validations exist (users are required to fill out the correct information and select the correct information)
- form validations are enforced

*Additional information*
- The calendar currently has a bug, users are unable to select a date and a date is required to submit a form
