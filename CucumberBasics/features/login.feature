Feature:Login
    In order to perform Login
    As a user
    I want to enter correct useraname and password

    Background: Navigate to LinkedIn
        Given The user navigates to LinkedIn
        When The user validates the homepage title

    # @dev
    Scenario Outline: Scenario Outline name: In order to verify login to LinkedIn

        Then The user enter '<username>' username
        Then The user enter '<password>' password
        Then The user should '<loginStatus>' succesufully logged in

        Examples:
            | username | password | loginStatus |
            | valid    | valid    | be          |
            | invalid  | invalid  | not be      |

    # Scenario:In order to verify login to LinkedIn as Valid user
    #     And The user enter 'valid' username
    #     And The user enter 'valid' password
    #     Then The user should 'be' succesufully logged in

    # Scenario: In order to verify login to LinkedIn as Invalid user
    #     And The user enter 'invalid' username
    #     And The user enter 'invalid' password
    #     Then The user should 'not be' succesufully logged in



