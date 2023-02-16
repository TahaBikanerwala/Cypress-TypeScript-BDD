Feature: Homepage is loading properly
    Homepage should load up for valid user

    Scenario: Valid user should see the homepage
        Given User is logged out
        When user signs in to the website
        Then User should see the homepage title as 'STORE'
        And User should see Heading as 'PRODUCT STORE'

