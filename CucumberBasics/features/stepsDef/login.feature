Feature:Login
    In order to perform Login
    As a user
    I want to enter correct useraname and password

    Scenario: In order to verify login to LinkedIn
        Given The user navigates to LinkedIn
        When The user validates the homepage title
        And The user enter valid username
        And The user enter valid password
        Then The user should be succesufully logged in

