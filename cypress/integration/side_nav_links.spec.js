/// <reference types="cypress" />
import HomePage from '../support/PageObjects/HomePage'

const homePage = new HomePage()


describe('Test Side Navigation Links for ', ()=> {


    beforeEach('Access login page', ()=>{
        //login to dashboard
        cy.visit('https://app.mailshake.com/login')
        cy.get('#mat-input-0').type('leslieknope@mailinator.com')
        cy.get('#mat-input-1').type("'F'-\\(3S@e9^(w=/*PM@")
        homePage.getBtn().contains(' Log In ').click()
        cy.wait(2000)
        // verify Dashboard page by verifying "recent campaigns" button is visible 
        cy.get('.cdk-column-title > strong').should('be.visible')
    })

    it('Click Prospects object', ()=>{
        homePage.getProspects().click()
        cy.wait(2000)
        // verify Prospects page by verifying "add prospects" button is visible  
        homePage.getBtn().contains(' Add Prospects ').should('be.visible')
    })

    it('Click Unsubscribes object', ()=>{
        homePage.getProspects().click()
        homePage.getUnsubscribes().click()
        cy.wait(2000)
        // verify Unsubscribes page by verifying "import unsubscribes" button is visible  
        homePage.getBtn().contains(' Import Unsubscribes ').should('be.visible')
    })
    
    it('Click Campaigns object', ()=>{
        homePage.getCampaigns().click()
        cy.wait(2000)
        // verify Campaigns page by verifying "new campaigns" button is visible
        homePage.getBtn().contains(' New Campaign ').should('be.visible') 
    })
      it('Click Campaigns then Lead Catcher object', ()=>{
        homePage.getCampaigns().click()
        homePage.getLeadCatcher().click()
        cy.wait(2000)
        // verify Lead Catcher page by verifying "Leads" text is visible  
        homePage.getBtn().contains(' Leads ').should('be.visible')
    })
        it('Click Campaigns then Templates object', ()=>{
        homePage.getCampaigns().click()
        homePage.getTemplates().click()
        cy.wait(2000)
        // verify Unsubscribes page by verifying "new template" button is visible  
        homePage.getBtn().contains(' New Template ').should('be.visible')
    })

    it('Click Mail Accounts object', ()=>{
        homePage.getMailAccounts().click()
        cy.wait(2000)
        // verify Mail Accounts page by verifying "add account" button is visible
        homePage.getBtn().contains(' Add Account ').should('be.visible') 
    })
    it('Click Mail Accounts then Sending Calendar object', ()=>{
        homePage.getMailAccounts().click()
        homePage.getSendingCalendar().click()
        cy.wait(2000)
        // verify Unsubscribes page by verifying "new template" button is visible  
        cy.get('.tab-label').contains('Sending Calendar').should('be.visible')
    })   
    it('Click Reports object', ()=>{
        homePage.getReports().click()
        cy.wait(2000)
        // verify Reports page by verifying "view" button is visible
        homePage.getBtn().contains('View').should('be.visible') 
    })
    it('Click Reports then Productivity object', ()=>{
        homePage.getReports().click()
        homePage.getReportsProductivity().click()
        cy.wait(2000)
        // verify subreports by title   
        cy.get('mat-card-title').contains(' New Leads by Salesperson ').should('be.visible')
    })
    it('Click Reports then Engagements object', ()=>{
        homePage.getReports().click()
        homePage.getReportsEngagements().click()
        cy.wait(2000)
        // verify subreports by titles  
        cy.get('mat-card-title').contains(' Engagements ').should('be.visible')
    })
    it('Click Reports then Lead Catcher object', ()=>{
        homePage.getReports().click()
        homePage.getReportsLeadCatcher().click()
        cy.wait(2000)
        // verify subreports by titles  
        cy.get('mat-card-title').contains(' Leads ').should('be.visible')
    })
    it('Click Reports then Lead Drivers object', ()=>{
        homePage.getReports().click()
        homePage.getReportsLeadDrivers().click()
        cy.wait(2000)
        // verify subreports by titles  
        cy.get('mat-card-title').contains(' Lead Drivers ').should('be.visible')
    })

    it('Click Integrations object', ()=>{
        homePage.getIntegrations().click()
        cy.wait(2000)
        // verify Integrations page by verifying "connect new app" button is visible
        homePage.getBtn().contains(' Connect New App ').should('be.visible') 
    })
    it('Click Integrations then Conversion Tracking object', ()=>{
        homePage.getIntegrations().click()
        homePage.getConversionTracking().click()
        cy.wait(2000)
        // verify Integrations page by verifying "embed options" title 
        cy.get('mat-card-title').contains(' Embed Options ').should('be.visible')
    })


    it('Click Settings object', ()=>{
        homePage.getSettings().click()
        cy.wait(2000)
        // verify Settings page by verifying "Security" and "Profile" tab is visible 
        cy.get('.inner-title').contains('Security').should('be.visible') 
        cy.get('.inner-title').contains('Profile').should('be.visible') 
    })

    it('Click Tools object', ()=>{
        homePage.getTools().click()
        cy.wait(2000)
        // verify Campaigns page by verifying "cards tools" class is visible
        cy.get('[class="cards tools"]').should('be.visible') 
    })

})


   
    


