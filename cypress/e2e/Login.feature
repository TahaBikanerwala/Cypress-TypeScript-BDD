Feature: Testing Login for a Standard User

    A standard user should be able to login

    Scenario: A standard user should be able to login to Saucelabs
        Given User launches the Swaglab website
        And inputs the username
        And inputs the password
        When User attempts to Login
        Then User should see Products page