import HomePageActions from '../../pageObjects/pageActions/HomePageActions'

const homePage = new HomePageActions()

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