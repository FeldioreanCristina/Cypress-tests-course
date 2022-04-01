///<reference types="cypress" />

import addCustomerPageElements from '../pageElements/addCustomerPageElements'

export default class addCustomerPageActions {

    constructor() {

        globalThis.addcustelement = new addCustomerPageElements()

    }

    clickAddCustomerBtn() {
        addcustelement.addCustomerBtn().click()
    }

    addCustomerDetails(firstName, lastName, PostCode) {

        // addcustelement.addCustomerBtn().click()
        addcustelement.firstNameField().type(firstName)
        addcustelement.lastNameField().type(lastName)
        addcustelement.PostCodeField().type(PostCode)
        // addcustelement.addCustomerSubmitBtn().click()
    }

    validateAlert(alertMsg) {
        cy.on('window:alert', (alertText) => {
            expect(alertText).contains(alertText)
        })
    }

    submitCustomerDetails() {
        addcustelement.addCustomerSubmitBtn().click()
    }


}