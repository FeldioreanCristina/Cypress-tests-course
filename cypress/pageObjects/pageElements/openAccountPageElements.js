///<reference types="cypress" />

const or = require("../../locators.json")

export default class openAccountPageElements{

    openAccountBtn(){

        return cy.get(or.openAccountPage.openAccountBtn)

    }

    currencyDropdown(){

        return cy.get(or.openAccountPage.currencyDropdown)
        
    }

    customerDropdown(){

        return cy.get(or.openAccountPage.customerDropdown)
        
    }

    processBtn (){

        return cy.get(or.openAccountPage.processBtn)
    }
}