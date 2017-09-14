Feature: This is to demonstrate POM functionality with Cucumber

  Scenario: Fill Contact form using POM design pattern or framework
    Given I open "chrome" browser and Go to application under test
      | url | http://www.thetestroom.com/webapp/ |
    When I click on Contact link
    And enter value to name field
    And select radio button
    And enter value to address field
    And enter value to postcode field
    And enter value to email field
    And click on submit button
    Then verify the contact confirmation page title
