///<reference types="cypress" />
import HomePageActions from '../../pageObjects/pageActions/HomePageActions'
import addCustomerPageActions from '../../pageObjects/pageActions/addCustomerPageActions'
import openAccountPageActions from '../../pageObjects/pageActions/openAccountaPageActions'

describe ("Open Customer Account",()=>{

    const homePage = new HomePageActions()
    const addCustomer = new addCustomerPageActions()
    const openaccount = new openAccountPageActions()

    before(()=>{

        cy.fixture('testData').then((data)=>{
            globalThis.data = data
        })
    })

    
    beforeEach(()=>{

        homePage.navigateToURL()

    })

    it("Open account test",()=>{

        homePage.loginAsBankManager()
        addCustomer.addCustomerDetails(data.firstName,data.lastName,data.PostCode)
        addCustomer.validateAlert(data.alertmsg)
        openaccount.openAccount(data.customer, data.currency)
        openaccount.validateAlert(data.accountalert)
        
    })
  
})