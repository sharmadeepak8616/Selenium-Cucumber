Feature: To test working on Scenario Outline with DataTable

  Scenario Outline: Test Navigation to various pages by taking title and xpath from DataTable
    Given Open browser and launch application
      | url | https://www.yahoo.com/ |
    When navigate to "<page>"
    Then verify the page "<title>"

    Examples: 
      | page    | title                                                        |
      | News    | Yahoo News - Latest News & Headlines                         |
      | Finance | Yahoo Finance - Business Finance, Stock Market, Quotes, News |
      | Sports  | Yahoo Sports \| Sports News, Scores, Fantasy Games           |
      | Mail    | Yahoo - login                                                |
