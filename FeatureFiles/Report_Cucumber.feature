Feature: This is to learn Report generation in Cucumber framework

  Scenario: Generating report at the end of test execution
    Given I open yahoo home url
    When I click on link
      | link | News |
    Then page title must conatin link
