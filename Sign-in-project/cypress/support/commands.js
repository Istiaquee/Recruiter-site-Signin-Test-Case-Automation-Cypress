// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('screenshotWithUrl', () => {
    // Get the current URL
    cy.url().then((url) => {
        // Inject a div with the URL at the top of the page
        cy.document().then((doc) => {
            const urlDiv = doc.createElement('div');
            urlDiv.innerText = `URL: ${url}`;
            urlDiv.style.position = 'fixed';
            urlDiv.style.top = '0';
            urlDiv.style.left = '0';
            urlDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            urlDiv.style.color = 'white';
            urlDiv.style.padding = '10px';
            urlDiv.style.zIndex = '9999';
            urlDiv.id = 'url-overlay';

            doc.body.appendChild(urlDiv);
        });

        // Take the screenshot
        //  cy.screenshot();
         cy.screenshot({ clip: { x: 5, y: 15, width: 1000, height: 250 } });

        // Remove the URL div after taking the screenshot
        cy.get('#url-overlay').then($el => {
            $el.remove();
        });
    });
});