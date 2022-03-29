///<reference types="cypress" />

import openAccountPageElements from '../pageElements/openAccountPageElements'

export default class openAccountPageActions {

    constructor(){

        globalThis.openaccountelement = new openAccountPageElements()

    }

    openAccount(customer, currency){

        openaccountelement.openAccountBtn().click()
        openaccountelement.customerDropdown().select(customer)
        openaccountelement.currencyDropdown().select(currency)
        openaccountelement.processBtn().click()
    }

    validateAlert(alertMsg){
        cy.on('window:alert',(alertText)=>{
            expect(alertText).contains(alertText)
        })
    }
}
    