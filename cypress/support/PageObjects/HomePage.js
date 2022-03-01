class HomePage {

    getLogo(){
        return cy.get('.side-brand')
    }

    getBtn(){
        return cy.get('.mat-button-wrapper')
    }

    getRecentCampaignsBtn() {
        return cy.get('.cdk-column-title > strong')
    }
    
    getDashboard(){
        return cy.get(":nth-child(1) > .mat-list-item > .mat-list-item-content > .mat-badge")
    }
    getProspects(){
        return cy.get(":nth-child(2) > .mat-list-item > .mat-list-item-content > .mat-badge")
    }
    getUnsubscribes(){
        return cy.get(':nth-child(2) > :nth-child(2) > .mat-list-item > .mat-list-item-content > .mat-badge')
    }
    getCampaigns(){
        return cy.get(":nth-child(3) > .mat-list-item > .mat-list-item-content > .mat-badge")
    }
        getLeadCatcher(){
        return cy.get(':nth-child(2) > :nth-child(2) > .mat-list-item > .mat-list-item-content > .mat-badge')
        }
        getTemplates(){
        return cy.get(':nth-child(2) > :nth-child(3) > .mat-list-item > .mat-list-item-content > .mat-badge')
        }
    getMailAccounts(){
        return cy.get(":nth-child(4) > .mat-list-item > .mat-list-item-content > .mat-badge")
    }
        getSendingCalendar(){
        return cy.get(':nth-child(2) > :nth-child(2) > .mat-list-item > .mat-list-item-content > .mat-badge')
        }
    getReports(){
        return cy.get(":nth-child(5) > .mat-list-item > .mat-list-item-content > .mat-badge")
    }
        getReportsProductivity(){
            return cy.get(':nth-child(2) > :nth-child(2) > .mat-list-item > .mat-list-item-content > .mat-badge')
            }
        getReportsEngagements(){
        return cy.get(':nth-child(2) > :nth-child(3) > .mat-list-item > .mat-list-item-content > .mat-badge')
        }
        getReportsLeadCatcher(){
        return cy.get(':nth-child(2) > :nth-child(4) > .mat-list-item > .mat-list-item-content > .mat-badge')
        }
        getReportsLeadDrivers(){
        return cy.get(':nth-child(2) > :nth-child(5) > .mat-list-item > .mat-list-item-content > .mat-badge')
        }

    getIntegrations(){
        return cy.get(":nth-child(6) > .mat-list-item > .mat-list-item-content > .mat-badge")
    }
        getConversionTracking(){
        return cy.get(':nth-child(2) > :nth-child(2) > .mat-list-item > .mat-list-item-content > .mat-badge')
        }
    getSettings(){
        return cy.get(":nth-child(7) > .mat-list-item > .mat-list-item-content > .mat-badge")
    }
    getTools(){
        return cy.get(":nth-child(8) > .mat-list-item > .mat-list-item-content > .mat-badge")
    }  
}

export default HomePage;