Feature: Bank Feature

    I want to validate Banking Scenarios

    Background:
        Given I navigate to the website

    @smoke
    Scenario: Login as Bank Manager
        When I click on Bank Manager Login Button
        And Validate the page title

    @smoke
    Scenario: Add a Customer
        When I click on Bank Manager Login Button
        And Validate the page title
        And I click on Add Customer Button
        And I entered
            | firstname | lastname | postcode |
            | Cristina  | Feldi    | 45000    |
        And I click on submit Button
        And I validate the alert text

    @other
    Scenario: Opening Account
        When I click on Bank Manager Login Button
        And Validate the page title