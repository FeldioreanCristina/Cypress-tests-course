///<reference types="cypress" />
import HomePageActions from '../../pageObjects/pageActions/HomePageActions'
import addCustomerPageActions from '../../pageObjects/pageActions/addCustomerPageActions'

describe ("Adding a new customer",()=>{

    const homePage = new HomePageActions()
    const addCustomer = new addCustomerPageActions()

    before(()=>{

        cy.fixture('testData').then((data)=>{
            globalThis.data = data
        })
    })

    
    beforeEach(()=>{

        homePage.navigateToURL()

    })

    it("Add customer details",()=>{

        homePage.loginAsBankManager()
        addCustomer.addCustomerDetails(data.firstName,data.lastName,data.PostCode)
        addCustomer.validateAlert(data.alertmsg)
        
    })
})