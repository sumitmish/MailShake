import HomePage from '../support/PageObjects/HomePage'
const homePage = new HomePage()

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


//Finds side nav bar links based on name and clicks on it
Cypress.Commands.add('clickSideBarNav',(name)=>{
    cy.get(".mat-list-item > .mat-list-item-content").each(($el,index,$list)=> {
        const objName = $el.text()
        if(objName.includes(name)){
            //Click Name
            cy.wrap($el).click()
            cy.wait(2000)
        }    
    }) 
})

//login
Cypress.Commands.add('login', ()=>{
    cy.visit('https://app.mailshake.com/login')
    cy.get('#mat-input-0').type('leslieknope@mailinator.com')
    cy.get('#mat-input-1').type("'F'-\\(3S@e9^(w=/*PM@")
        homePage.getBtn().contains(' Log In ').click()
        cy.wait(3000)
})
