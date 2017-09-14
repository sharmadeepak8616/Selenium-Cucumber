Feature: This is to demostrate Background keyword in Cucumber

  Background:
    Given Open yahoo home page

  Scenario: Test to print title of Yahoo news page
    When I click on News
    Then print title of Yahoo News

  Scenario: Test to print title of Yahoo Sports page
    When I click on Sports
    Then print title of Yahoo Sports

  Scenario: Test to print title of Yahoo Mail page
    When I click on Mail
    Then print title of Yahoo Mail
