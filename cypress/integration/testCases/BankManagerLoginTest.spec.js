///<reference types="cypress" />
import HomePageActions from '../../pageObjects/pageActions/HomePageActions'

describe ("Login as Bank Manager",()=>{

    const homePage = new HomePageActions()

    beforeEach(()=>{
        homePage.navigateToURL()

    })

    it("Verify Title of the Page",()=>{

        homePage.validateTitle().should('eq','Protractor practice website - Banking App')

    })

    it("Verify login as Bank Manager",()=>{

        homePage.loginAsBankManager()
    })
})