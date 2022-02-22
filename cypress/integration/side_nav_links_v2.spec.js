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
        cy.visit('https://app.mailshake.com/login')
        cy.get('#mat-input-0').type('leslieknope@mailinator.com')
        cy.get('#mat-input-1').type("'F'-\\(3S@e9^(w=/*PM@")
        homePage.getBtn().contains(' Log In ').click()
        cy.wait(2000)
    })

    beforeEach('Reset to homepage',()=>{
        // reset each test case to homepage
        homePage.getLogo().click()
        // verify Dashboard page by verifying "recent campaigns" button is visible 
        cy.get('.cdk-column-title > strong').should('be.visible')
    })

    it('Find Prospects object and click it', ()=> {  
        cy.get(".mat-list-item > .mat-list-item-content").each(($el,index,$list)=> {
            const objName = $el.text()
            if(objName.includes('Prospects')){
                //Click Prospects
                cy.wrap($el).click()
                cy.wait(2000)
                // verify Prospects page by verifying "add prospects" button is visible  
                homePage.getBtn().contains(' Add Prospects ').should('be.visible')
            }    
        })    
    })

    it('Click Prospects object then find Unsubscribes and click it', ()=> {
        homePage.getProspects().click()  
        cy.get(".mat-list-item > .mat-list-item-content").each(($el,index,$list)=> {
            const objName = $el.text()
            if(objName.includes('Unsubscribe')){
                //Click Unsubscribe
                cy.wrap($el).click()
                cy.wait(2000)
                // verify Unsubscribes page by verifying "import unsubscribes" button is visible   
                homePage.getBtn().contains(' Import Unsubscribes ').should('be.visible')
            }    
        })    
    })

    it('Find Campaigns object and click it', ()=> {
        cy.get(".mat-list-item > .mat-list-item-content").each(($el,index,$list)=> {
            const objName = $el.text()
            if(objName.includes('Campaign')){
                //Click Campaign
                cy.wrap($el).click()
                cy.wait(2000)
                // verify Campaigns page by verifying "new campaigns" button is visible
                homePage.getBtn().contains(' New Campaign ').should('be.visible')
            }    
        })    
    })

    it('Click Campaigns object then find Lead Catcher and click it', ()=> {
        homePage.getCampaigns().click() 
        cy.get(".mat-list-item > .mat-list-item-content").each(($el,index,$list)=> {
            const objName = $el.text()
            if(objName.includes('Lead Catch')){
                //Click Lead Catch
                cy.wrap($el).click()
                cy.wait(4000)
                // verify Lead Catcher page by verifying "Leads" text is visible  
                homePage.getBtn().contains(' Leads ').should('be.visible')
            }    
        })    
    })

    it('Click Campaigns object then find Templates and click it', ()=> {
        homePage.getCampaigns().click() 
        cy.get(".mat-list-item > .mat-list-item-content").each(($el,index,$list)=> {
            const objName = $el.text()
            if(objName.includes('Templates')){
                //Click Templates
                cy.wrap($el).click()
                cy.wait(2000)
                // verify Unsubscribes page by verifying "new template" button is visible  
                homePage.getBtn().contains(' New Template ').should('be.visible')
            }    
        })    
    })

    it('Find Mail Accounts object and click it', ()=> { 
        cy.get(".mat-list-item > .mat-list-item-content").each(($el,index,$list)=> {
            const objName = $el.text()
            if(objName.includes('Mail Accounts')){
                //Click Mail Accounts
                cy.wrap($el).click()
                cy.wait(2000)
                // verify Mail Accounts page by verifying "add account" button is visible
                homePage.getBtn().contains(' Add Account ').should('be.visible')
            }    
        })    
    })
    it('Click Mail Accounts object then find Sending Calendar and click it', ()=> {
        homePage.getMailAccounts().click() 
        cy.get(".mat-list-item > .mat-list-item-content").each(($el,index,$list)=> {
            const objName = $el.text()
            if(objName.includes('Sending Calendar')){
                //Click Sending Calendar
                cy.wrap($el).click()
                cy.wait(2000)
                // verify Unsubscribes page by verifying "new template" button is visible  
                cy.get('.tab-label').contains('Sending Calendar').should('be.visible')
            }    
        })    
    })
    it('Find Reports object and click it', ()=> { 
        cy.get(".mat-list-item > .mat-list-item-content").each(($el,index,$list)=> {
            const objName = $el.text()
            if(objName.includes('Reports')){
                //Click Reports
                cy.wrap($el).click()
                cy.wait(2000)
                // verify Reports page by verifying "view" button is visible
                homePage.getBtn().contains('View').should('be.visible') 
            }    
        })    
    })
    
    it('Click Reports object then find Productivity and click it', ()=> {
        homePage.getReports().click() 
        cy.get(".mat-list-item > .mat-list-item-content").each(($el,index,$list)=> {
            const objName = $el.text()
            if(objName.includes('Productivity')){
                //Click Productivity
                cy.wrap($el).click()
                cy.wait(2000)
                // verify subreports by title   
                cy.get('mat-card-title').contains(' New Leads by Salesperson ').should('be.visible')
            }    
        })    
    })

    it('Click Reports object then find Engagements and click it', ()=> {
        homePage.getReports().click() 
        cy.get(".mat-list-item > .mat-list-item-content").each(($el,index,$list)=> {
            const objName = $el.text()
            if(objName.includes('Engagements')){
                //Click Engagements
                cy.wrap($el).click()
                cy.wait(2000)
                // verify subreports by titles  
                cy.get('mat-card-title').contains(' Engagements ').should('be.visible')
            }    
        })    
    })

    it('Click Reports object then find Lead Catcher and click it', ()=> {
        homePage.getReports().click() 
        cy.get(".mat-list-item > .mat-list-item-content").each(($el,index,$list)=> {
            const objName = $el.text()
            if(objName.includes('Lead Catcher')){
                //Click Lead Catcher
                cy.wrap($el).click()
                cy.wait(2000)
                // verify subreports by titles  
                cy.get('mat-card-title').contains(' Leads ').should('be.visible')
            }    
        })    
    })

    it('Click Reports object then find Lead Drivers and click it', ()=> {
        homePage.getReports().click() 
        cy.get(".mat-list-item > .mat-list-item-content").each(($el,index,$list)=> {
            const objName = $el.text()
            if(objName.includes('Lead Drivers')){
                //Click Lead Drivers
                cy.wrap($el).click()
                cy.wait(2000)
                // verify subreports by titles  
                cy.get('mat-card-title').contains(' Lead Drivers ').should('be.visible')
            }    
        })    
    })

    it('Find Integrations object and click it', ()=> { 
        cy.get(".mat-list-item > .mat-list-item-content").each(($el,index,$list)=> {
            const objName = $el.text()
            if(objName.includes('Integrations')){
                //Click Integrations
                cy.wrap($el).click()
                cy.wait(2000)
                // verify Integrations page by verifying "connect new app" button is visible
                homePage.getBtn().contains(' Connect New App ').should('be.visible') 
            }    
        })    
    })

    it('Click Integrations object then find Conversion Tracking and click it', ()=> {
        homePage.getIntegrations().click() 
        cy.get(".mat-list-item > .mat-list-item-content").each(($el,index,$list)=> {
            const objName = $el.text()
            if(objName.includes('Conversion Tracking')){
                //Click Conversion Tracking
                cy.wrap($el).click()
                cy.wait(2000)
                // verify Integrations page by verifying "embed options" title 
                cy.get('mat-card-title').contains(' Embed Options ').should('be.visible')
            }    
        })    
    })

    it('Find Settings object and click it', ()=> { 
        cy.get(".mat-list-item > .mat-list-item-content").each(($el,index,$list)=> {
            const objName = $el.text()
            if(objName.includes('Settings')){
                //Click Settings
                cy.wrap($el).click()
                cy.wait(2000)
                cy.get('.inner-title').contains('Security').should('be.visible') 
                cy.get('.inner-title').contains('Profile').should('be.visible') 
            }    
        })    
    })

    it('Find Tools object and click it', ()=> { 
        cy.get(".mat-list-item > .mat-list-item-content").each(($el,index,$list)=> {
            const objName = $el.text()
            if(objName.includes('Tools')){
                //Click Tools
                cy.wrap($el).click()
                cy.wait(2000)
                // verify Campaigns page by verifying "cards tools" class is visible
                cy.get('[class="cards tools"]').should('be.visible') 
            }    
        })    
    })

})


   
    


