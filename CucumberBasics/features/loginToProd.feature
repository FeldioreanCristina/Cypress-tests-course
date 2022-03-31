Feature:Login
    In order to perform Login
    As a user
    I want to enter correct useraname and password

    Background: Navigate to LinkedIn
        Given The user navigates to LinkedIn
        When The user validates the homepage title

    Scenario: In order to verify login to LinkedIn in production
        Then The user enter 'username' username
        Then The user enter 'password' password
        Then The user validates the captcha image
            | Country | Code |
            | India   | 101  |
            | USA     | 102  |
            | UK      | 103  |
        Then The user should 'loginStatus' succesufully logged in








