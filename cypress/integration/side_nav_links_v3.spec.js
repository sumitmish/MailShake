/// <reference types="cypress" />
import HomePage from '../support/PageObjects/HomePage'
import { wrap } from 'module'

const homePage = new HomePage()


describe('Test Side Navigation Links for ', ()=> {
    
    Cypress.Cookies.defaults({
        preserve: 'sessionID'
    })
    before('Access login page', ()=>{
        //login to dashboard
        cy.login()
    })
    beforeEach('Reset to homepage',()=>{
        // reset each test case to homepage
        homePage.getLogo().click()
        // verify Dashboard page by verifying "recent campaigns" button is visible 
        cy.get('.cdk-column-title > strong').should('be.visible')
    })

    it('Find Prospects object and click it', ()=> {  
        cy.clickSideBarNav('Prospects')
        // verify Prospects page by verifying "add prospects" button is visible  
        homePage.getBtn().contains(' Add Prospects ').should('be.visible')   
    })

    it('Click Prospects object then find Unsubscribes and click it', ()=> {
        homePage.getProspects().click()  
        cy.clickSideBarNav('Unsubscribe')    
        // verify Unsubscribes page by verifying "import unsubscribes" button is visible   
        homePage.getBtn().contains(' Import Unsubscribes ').should('be.visible')   
    })

    it('Find Campaigns object and click it', ()=> {
        cy.clickSideBarNav('Campaigns')
        // verify Campaigns page by verifying "new campaigns" button is visible
        homePage.getBtn().contains(' New Campaign ').should('be.visible')   
    })

    it('Click Campaigns object then find Lead Catcher and click it', ()=> {
        homePage.getCampaigns().click() 
        cy.clickSideBarNav('Lead Catcher')
                // verify Lead Catcher page by verifying "Leads" text is visible  
                homePage.getBtn().contains(' Leads ').should('be.visible')
    })

    it('Click Campaigns object then find Templates and click it', ()=> {
        homePage.getCampaigns().click() 
        cy.clickSideBarNav('Templates')
        // verify Unsubscribes page by verifying "new template" button is visible  
        homePage.getBtn().contains(' New Template ').should('be.visible')
    })

    it('Find Mail Accounts object and click it', ()=> { 
        cy.clickSideBarNav('Mail Accounts')
        // verify Mail Accounts page by verifying "add account" button is visible
        homePage.getBtn().contains(' Add Account ').should('be.visible')
    })

    it('Click Mail Accounts object then find Sending Calendar and click it', ()=> {
        homePage.getMailAccounts().click() 
        cy.clickSideBarNav('Sending Calendar')
        // verify Unsubscribes page by verifying "new template" button is visible  
        cy.get('.tab-label').contains('Sending Calendar').should('be.visible')
    })
    it('Find Reports object and click it', ()=> { 
        cy.clickSideBarNav('Reports')
        // verify Reports page by verifying "view" button is visible
        homePage.getBtn().contains('View').should('be.visible') 
    })
    
    it('Click Reports object then find Productivity and click it', ()=> {
        homePage.getReports().click() 
        cy.clickSideBarNav('Productivity')
        // verify subreports by title   
        cy.get('mat-card-title').contains(' New Leads by Salesperson ').should('be.visible')
    })

    it('Click Reports object then find Engagements and click it', ()=> {
        homePage.getReports().click() 
        cy.clickSideBarNav('Engagements')
        // verify subreports by titles  
        cy.get('mat-card-title').contains(' Engagements ').should('be.visible')
    })

    it('Click Reports object then find Lead Catcher and click it', ()=> {
        homePage.getReports().click() 
        cy.clickSideBarNav('Lead Catcher')
        // verify subreports by titles  
        cy.get('mat-card-title').contains(' Leads ').should('be.visible')
    })

    it('Click Reports object then find Lead Drivers and click it', ()=> {
        homePage.getReports().click() 
        cy.clickSideBarNav('Lead Drivers')
        // verify subreports by titles  
        cy.get('mat-card-title').contains(' Lead Drivers ').should('be.visible')
    })

    it('Find Integrations object and click it', ()=> { 
        cy.clickSideBarNav('Integrations')
        // verify Integrations page by verifying "connect new app" button is visible
        homePage.getBtn().contains(' Connect New App ').should('be.visible') 
    })

    it('Click Integrations object then find Conversion Tracking and click it', ()=> {
        homePage.getIntegrations().click() 
        cy.clickSideBarNav('Conversion Tracking')
        // verify Integrations page by verifying "embed options" title 
        cy.get('mat-card-title').contains(' Embed Options ').should('be.visible')
    })

    it('Find Settings object and click it', ()=> { 
        cy.clickSideBarNav('Settings')
        cy.get('.inner-title').contains('Security').should('be.visible') 
        cy.get('.inner-title').contains('Profile').should('be.visible')     
    })

    it('Find Tools object and click it', ()=> { 
        cy.clickSideBarNav('Tools')
        // verify Campaigns page by verifying "cards tools" class is visible
        cy.get('[class="cards tools"]').should('be.visible')    
    })

})


   
    


