import HomePageActions from '../../pageObjects/pageActions/HomePageActions';
import addCustomerPageActions from '../../pageObjects/pageActions/addCustomerPageActions';

const homePage = new HomePageActions();
const addCustomer = new addCustomerPageActions()

Given('I navigate to the website', () => {

    // cy.visit('https://www.way2automation.com/angularjs-protractor/banking/#/login')

    homePage.navigateToURL()

})


When('I click on Bank Manager Login Button', () => {

    homePage.loginAsBankManager()

    // cy.get('body > div.ng-scope > div > div.ng-scope > div > div.borderM.box.padT20 > div:nth-child(3) > button').click()

})

And('Validate the page title', () => {

    homePage.validateTitle().should('eq','Protractor practice website - Banking App')

    // cy.title().should('eq','Protractor practice website - Banking App')

})

And('I click on Add Customer Button', () => {

    addCustomer.clickAddCustomerBtn()

})

And('I entered', (datatable) => {

   datatable.hashes().forEach(element =>{
       addCustomer.addCustomerDetails(element.firstname,element.lastname, element.postcode)
   })

})

And('I click on submit Button', () => {

    addCustomer.submitCustomerDetails()
})

And('I validate the alert text', () => {

    addCustomer.validateAlert('Customer added successfully')
   
})