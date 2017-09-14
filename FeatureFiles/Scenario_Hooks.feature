Feature: Smoke test to test search functionality of google

Scenario: Enter a valid search in google search bar, and verify results
Given I opened the Google search homepage
When I enter "rain water harvesting" to search
Then I verify search results

