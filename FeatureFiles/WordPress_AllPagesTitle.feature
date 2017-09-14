Feature: Smoke test to verify page-title of each page of the application

  Scenario: To verify title of login page
    Given I open browser and launch application
    Then I verify the title of "log in" page
    And close the browser

  Scenario: To verify title of dashboard page
    Given I open browser and launch application
    When I login into appllication using valid credentials
    Then I verify the title of "dashboard" page
    And close the browser

  Scenario: To verify title of posts page
    Given I open browser and launch application
    When I login into appllication using valid credentials
    And click on the "posts"
    Then I verify the title of "posts" page
    And close the browser

  Scenario: To verify title of media page
    Given I open browser and launch application
    When I login into appllication using valid credentials
    And click on the "media"
    Then I verify the title of "media" page
    And close the browser

  Scenario: To verify title of comments page
    Given I open browser and launch application
    When I login into appllication using valid credentials
    And click on the "comments"
    Then I verify the title of "comments" page
    And close the browser

  Scenario: To verify title of tools page
    Given I open browser and launch application
    When I login into appllication using valid credentials
    And click on the "tools"
    Then I verify the title of "tools" page
    And close the browser
