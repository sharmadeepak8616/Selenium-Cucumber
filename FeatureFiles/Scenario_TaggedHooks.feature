Feature: Smoke test to search an item in Google

@googleSearch
Scenario: Search desired item on google with tagged hooks
Given Open googgle search
When Enter item to be searched
Then verifying results

