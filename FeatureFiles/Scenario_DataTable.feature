Feature: Test Scenario with Data-Table in contact-us page

  Scenario: Enter contact us details using data-table with Scenario
    Given I open browser and launch learn-automation
    When I click on contact us
    And fill in the details
      | fields  | value                                           |
      | Name    | Peaceful                                        |
      | Email   | example@example.com                             |
      | Subject | Ignore - Selenium Test                          |
      | Message | This email is result of a selenium-cucumber run |
    Then verify email sent successfully message
