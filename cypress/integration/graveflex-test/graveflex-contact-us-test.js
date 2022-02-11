/// <reference types="cypress" />

describe('graveflex home page and contact us form test', () => {

    it('navigate to home page', () => {
        cy.visit('https://graveflex.com/')
    })

    it('navigate to about page', () => {
        // cy.contains('About Us').should('exist')

        cy.contains('About Us').should('exist').click()
        cy.location('pathname').should('eq', '/about')
    })

    it('finds Contact Us form', () => {
        cy.contains('Contact Us').should('exist')
    })
    
    it('fills in Contact Us form', () => {
        cy.get('input[name="contactEmail"]')
        .type('marthawarfel@gmail.com')
        .get('input[name="contactName"]')
        .type('Marty Cypress Tree')
        .get('input[name="message"]')
        .type('I hope this cypress message test finds you! This email would work to respond back')
    })
        
    it('submits Contact Us Form', () => {
    cy.get('button[type=submit]')
    .click()
    })



   
})