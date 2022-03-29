///<reference types="cypress" />

const or = require("../../locators.json")

export default class addCustomerPageElements{

    addCustomerBtn(){

        return cy.get(or.addCustomerPage.addCustBtn)
    }

    firstNameField(){

        return cy.get(or.addCustomerPage.firstName)
    }

    lastNameField(){

        return cy.get(or.addCustomerPage.lastName)
    }

    PostCodeField(){

        return cy.get(or.addCustomerPage.PostCode)
    }

    addCustomerSubmitBtn(){

        return cy.get(or.addCustomerPage.addCustomerSubmit)
    }

}
