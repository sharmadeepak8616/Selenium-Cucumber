$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ScenarioOutline_DataTable.feature");
formatter.feature({
  "line": 1,
  "name": "To test working on Scenario Outline with DataTable",
  "description": "",
  "id": "to-test-working-on-scenario-outline-with-datatable",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Test Navigation to various pages by taking title and xpath from DataTable",
  "description": "",
  "id": "to-test-working-on-scenario-outline-with-datatable;test-navigation-to-various-pages-by-taking-title-and-xpath-from-datatable",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open browser and launch application",
  "rows": [
    {
      "cells": [
        "url",
        "https://www.yahoo.com/"
      ],
      "line": 5
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "navigate to \"\u003cpage\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "verify the page \"\u003ctitle\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "to-test-working-on-scenario-outline-with-datatable;test-navigation-to-various-pages-by-taking-title-and-xpath-from-datatable;",
  "rows": [
    {
      "cells": [
        "page",
        "title"
      ],
      "line": 10,
      "id": "to-test-working-on-scenario-outline-with-datatable;test-navigation-to-various-pages-by-taking-title-and-xpath-from-datatable;;1"
    },
    {
      "cells": [
        "News",
        "Yahoo News - Latest News \u0026 Headlines"
      ],
      "line": 11,
      "id": "to-test-working-on-scenario-outline-with-datatable;test-navigation-to-various-pages-by-taking-title-and-xpath-from-datatable;;2"
    },
    {
      "cells": [
        "Finance",
        "Yahoo Finance - Business Finance, Stock Market, Quotes, News"
      ],
      "line": 12,
      "id": "to-test-working-on-scenario-outline-with-datatable;test-navigation-to-various-pages-by-taking-title-and-xpath-from-datatable;;3"
    },
    {
      "cells": [
        "Sports",
        "Yahoo Sports | Sports News, Scores, Fantasy Games"
      ],
      "line": 13,
      "id": "to-test-working-on-scenario-outline-with-datatable;test-navigation-to-various-pages-by-taking-title-and-xpath-from-datatable;;4"
    },
    {
      "cells": [
        "Mail",
        "Yahoo - login"
      ],
      "line": 14,
      "id": "to-test-working-on-scenario-outline-with-datatable;test-navigation-to-various-pages-by-taking-title-and-xpath-from-datatable;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3588463787,
  "status": "passed"
});
formatter.before({
  "duration": 2715258097,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Test Navigation to various pages by taking title and xpath from DataTable",
  "description": "",
  "id": "to-test-working-on-scenario-outline-with-datatable;test-navigation-to-various-pages-by-taking-title-and-xpath-from-datatable;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open browser and launch application",
  "rows": [
    {
      "cells": [
        "url",
        "https://www.yahoo.com/"
      ],
      "line": 5
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "navigate to \"News\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "verify the page \"Yahoo News - Latest News \u0026 Headlines\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ScenarioOutline_DataTable_Definition.launchApplication(DataTable)"
});
formatter.result({
  "duration": 6505913649,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "News",
      "offset": 13
    }
  ],
  "location": "ScenarioOutline_DataTable_Definition.navigateToLink(String)"
});
formatter.result({
  "duration": 5951645412,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yahoo News - Latest News \u0026 Headlines",
      "offset": 17
    }
  ],
  "location": "ScenarioOutline_DataTable_Definition.verifyTitle(String)"
});
formatter.result({
  "duration": 138087437,
  "status": "passed"
});
formatter.after({
  "duration": 249536987,
  "status": "passed"
});
formatter.after({
  "duration": 234891653,
  "status": "passed"
});
formatter.before({
  "duration": 2737359850,
  "status": "passed"
});
formatter.before({
  "duration": 2411896705,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Test Navigation to various pages by taking title and xpath from DataTable",
  "description": "",
  "id": "to-test-working-on-scenario-outline-with-datatable;test-navigation-to-various-pages-by-taking-title-and-xpath-from-datatable;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open browser and launch application",
  "rows": [
    {
      "cells": [
        "url",
        "https://www.yahoo.com/"
      ],
      "line": 5
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "navigate to \"Finance\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "verify the page \"Yahoo Finance - Business Finance, Stock Market, Quotes, News\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ScenarioOutline_DataTable_Definition.launchApplication(DataTable)"
});
formatter.result({
  "duration": 4257845161,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Finance",
      "offset": 13
    }
  ],
  "location": "ScenarioOutline_DataTable_Definition.navigateToLink(String)"
});
formatter.result({
  "duration": 6480737312,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yahoo Finance - Business Finance, Stock Market, Quotes, News",
      "offset": 17
    }
  ],
  "location": "ScenarioOutline_DataTable_Definition.verifyTitle(String)"
});
formatter.result({
  "duration": 141679366,
  "status": "passed"
});
formatter.after({
  "duration": 215699726,
  "status": "passed"
});
formatter.after({
  "duration": 265575689,
  "status": "passed"
});
formatter.before({
  "duration": 3252869314,
  "status": "passed"
});
formatter.before({
  "duration": 2972619099,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Test Navigation to various pages by taking title and xpath from DataTable",
  "description": "",
  "id": "to-test-working-on-scenario-outline-with-datatable;test-navigation-to-various-pages-by-taking-title-and-xpath-from-datatable;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open browser and launch application",
  "rows": [
    {
      "cells": [
        "url",
        "https://www.yahoo.com/"
      ],
      "line": 5
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "navigate to \"Sports\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "verify the page \"Yahoo Sports | Sports News, Scores, Fantasy Games\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ScenarioOutline_DataTable_Definition.launchApplication(DataTable)"
});
formatter.result({
  "duration": 5761675901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sports",
      "offset": 13
    }
  ],
  "location": "ScenarioOutline_DataTable_Definition.navigateToLink(String)"
});
formatter.result({
  "duration": 9294259812,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yahoo Sports | Sports News, Scores, Fantasy Games",
      "offset": 17
    }
  ],
  "location": "ScenarioOutline_DataTable_Definition.verifyTitle(String)"
});
formatter.result({
  "duration": 166779443,
  "status": "passed"
});
formatter.after({
  "duration": 261604171,
  "status": "passed"
});
formatter.after({
  "duration": 239413764,
  "status": "passed"
});
formatter.before({
  "duration": 2890432544,
  "status": "passed"
});
formatter.before({
  "duration": 2683114681,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Test Navigation to various pages by taking title and xpath from DataTable",
  "description": "",
  "id": "to-test-working-on-scenario-outline-with-datatable;test-navigation-to-various-pages-by-taking-title-and-xpath-from-datatable;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open browser and launch application",
  "rows": [
    {
      "cells": [
        "url",
        "https://www.yahoo.com/"
      ],
      "line": 5
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "navigate to \"Mail\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "verify the page \"Yahoo - login\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ScenarioOutline_DataTable_Definition.launchApplication(DataTable)"
});
formatter.result({
  "duration": 7439922416,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mail",
      "offset": 13
    }
  ],
  "location": "ScenarioOutline_DataTable_Definition.navigateToLink(String)"
});
formatter.result({
  "duration": 3987010353,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yahoo - login",
      "offset": 17
    }
  ],
  "location": "ScenarioOutline_DataTable_Definition.verifyTitle(String)"
});
formatter.result({
  "duration": 88410547,
  "status": "passed"
});
formatter.after({
  "duration": 257602048,
  "status": "passed"
});
formatter.after({
  "duration": 237437932,
  "status": "passed"
});
formatter.uri("Scenario_DataTable.feature");
formatter.feature({
  "line": 1,
  "name": "Test Scenario with Data-Table in contact-us page",
  "description": "",
  "id": "test-scenario-with-data-table-in-contact-us-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2605183556,
  "status": "passed"
});
formatter.before({
  "duration": 2516744300,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Enter contact us details using data-table with Scenario",
  "description": "",
  "id": "test-scenario-with-data-table-in-contact-us-page;enter-contact-us-details-using-data-table-with-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I open browser and launch learn-automation",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on contact us",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "fill in the details",
  "rows": [
    {
      "cells": [
        "fields",
        "value"
      ],
      "line": 7
    },
    {
      "cells": [
        "Name",
        "Peaceful"
      ],
      "line": 8
    },
    {
      "cells": [
        "Email",
        "example@example.com"
      ],
      "line": 9
    },
    {
      "cells": [
        "Subject",
        "Ignore - Selenium Test"
      ],
      "line": 10
    },
    {
      "cells": [
        "Message",
        "This email is result of a selenium-cucumber run"
      ],
      "line": 11
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "verify email sent successfully message",
  "keyword": "Then "
});
formatter.match({
  "location": "Scenario_DataTable_Definition.launchApplication()"
});
formatter.result({
  "duration": 6917568462,
  "status": "passed"
});
formatter.match({
  "location": "Scenario_DataTable_Definition.clickToContact()"
});
formatter.result({
  "duration": 6104970178,
  "status": "passed"
});
formatter.match({
  "location": "Scenario_DataTable_Definition.fillContactUsForm(DataTable)"
});
formatter.result({
  "duration": 6631115181,
  "status": "passed"
});
formatter.match({
  "location": "Scenario_DataTable_Definition.veriyEmailSent()"
});
formatter.result({
  "duration": 127564902,
  "status": "passed"
});
formatter.after({
  "duration": 254242137,
  "status": "passed"
});
formatter.after({
  "duration": 254242549,
  "status": "passed"
});
formatter.uri("Scenario_Hooks.feature");
formatter.feature({
  "line": 1,
  "name": "Smoke test to test search functionality of google",
  "description": "",
  "id": "smoke-test-to-test-search-functionality-of-google",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2984468300,
  "status": "passed"
});
formatter.before({
  "duration": 2489642349,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Enter a valid search in google search bar, and verify results",
  "description": "",
  "id": "smoke-test-to-test-search-functionality-of-google;enter-a-valid-search-in-google-search-bar,-and-verify-results",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I opened the Google search homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter \"rain water harvesting\" to search",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I verify search results",
  "keyword": "Then "
});
formatter.match({
  "location": "Scenario_Hooks_Definition.openGoogleHomepage()"
});
formatter.result({
  "duration": 1667797739,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rain water harvesting",
      "offset": 9
    }
  ],
  "location": "Scenario_Hooks_Definition.enterItemToBeSearched(String)"
});
formatter.result({
  "duration": 2234026015,
  "status": "passed"
});
formatter.match({
  "location": "Scenario_Hooks_Definition.verifyResults()"
});
formatter.result({
  "duration": 28043605,
  "status": "passed"
});
formatter.after({
  "duration": 255032922,
  "status": "passed"
});
formatter.after({
  "duration": 288317032,
  "status": "passed"
});
formatter.uri("Scenario_TaggedHooks.feature");
formatter.feature({
  "line": 1,
  "name": "Smoke test to search an item in Google",
  "description": "",
  "id": "smoke-test-to-search-an-item-in-google",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2811066597,
  "status": "passed"
});
formatter.before({
  "duration": 2754084341,
  "status": "passed"
});
formatter.before({
  "duration": 49498,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Search desired item on google with tagged hooks",
  "description": "",
  "id": "smoke-test-to-search-an-item-in-google;search-desired-item-on-google-with-tagged-hooks",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@googleSearch"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open googgle search",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter item to be searched",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "verifying results",
  "keyword": "Then "
});
formatter.match({
  "location": "Scenario_TaggedHooks_Definition.openGoogleHomepage()"
});
formatter.result({
  "duration": 2154679643,
  "status": "passed"
});
formatter.match({
  "location": "Scenario_TaggedHooks_Definition.enterItemToBeSearched()"
});
formatter.result({
  "duration": 2092060549,
  "status": "passed"
});
formatter.match({
  "location": "Scenario_TaggedHooks_Definition.verifyResults()"
});
formatter.result({
  "duration": 10655674,
  "status": "passed"
});
formatter.after({
  "duration": 219028683,
  "status": "passed"
});
formatter.after({
  "duration": 261969765,
  "status": "passed"
});
formatter.after({
  "duration": 62618,
  "status": "passed"
});
formatter.uri("WordPressLogin_Parameterised.feature");
formatter.feature({
  "line": 1,
  "name": "Smoke test for WordPress login Page by passing parameters",
  "description": "",
  "id": "smoke-test-for-wordpress-login-page-by-passing-parameters",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2937790806,
  "status": "passed"
});
formatter.before({
  "duration": 2581123357,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Test login with valid credentials passed as parameters",
  "description": "",
  "id": "smoke-test-for-wordpress-login-page-by-passing-parameters;test-login-with-valid-credentials-passed-as-parameters",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Open wordpress application in \"Chrome\" browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter valid \"admin\" and \"demo123\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "must successfully land on Dashboard page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 31
    }
  ],
  "location": "WordPressLogin_Parameterised_Definition.Open_wordpress_application_in_browser(String)"
});
formatter.result({
  "duration": 6135157590,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 15
    },
    {
      "val": "demo123",
      "offset": 27
    }
  ],
  "location": "WordPressLogin_Parameterised_Definition.I_enter_valid_and(String,String)"
});
formatter.result({
  "duration": 23144912368,
  "status": "passed"
});
formatter.match({
  "location": "WordPressLogin_Parameterised_Definition.must_successfully_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 85580922,
  "status": "passed"
});
formatter.after({
  "duration": 224731650,
  "status": "passed"
});
formatter.after({
  "duration": 394050000,
  "status": "passed"
});
formatter.uri("WordPressLogin_Simple.feature");
formatter.feature({
  "line": 1,
  "name": "Smoke test for WordPress login page",
  "description": "",
  "id": "smoke-test-for-wordpress-login-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2821155897,
  "status": "passed"
});
formatter.before({
  "duration": 2514732737,
  "status": "passed"
});
formatter.scenario({
  "line": 2,
  "name": "Test login with valid credentials",
  "description": "",
  "id": "smoke-test-for-wordpress-login-page;test-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "Open wordpress application in chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I enter valid username and password",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "I must successfully land on Dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "WordPressLogin_Simple_Definition.Open_wordpress_application_in_chrome_browser()"
});
formatter.result({
  "duration": 5013667747,
  "status": "passed"
});
formatter.match({
  "location": "WordPressLogin_Simple_Definition.I_enter_valid_username_and_password()"
});
formatter.result({
  "duration": 14733258707,
  "status": "passed"
});
formatter.match({
  "location": "WordPressLogin_Simple_Definition.I_must_successfully_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 78642111,
  "status": "passed"
});
formatter.after({
  "duration": 238471171,
  "status": "passed"
});
formatter.after({
  "duration": 244268200,
  "status": "passed"
});
formatter.uri("WordPress_AllPagesTitle.feature");
formatter.feature({
  "line": 1,
  "name": "Smoke test to verify page-title of each page of the application",
  "description": "",
  "id": "smoke-test-to-verify-page-title-of-each-page-of-the-application",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2637005767,
  "status": "passed"
});
formatter.before({
  "duration": 2502008563,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "To verify title of login page",
  "description": "",
  "id": "smoke-test-to-verify-page-title-of-each-page-of-the-application;to-verify-title-of-login-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I open browser and launch application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I verify the title of \"log in\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "WordPress_AllPagesTitle_Definition.launchApplication()"
});
formatter.result({
  "duration": 7522725835,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "log in",
      "offset": 23
    }
  ],
  "location": "WordPress_AllPagesTitle_Definition.verifyTitle(String)"
});
formatter.result({
  "duration": 5018233946,
  "status": "passed"
});
formatter.match({
  "location": "WordPress_AllPagesTitle_Definition.close_the_browser()"
});
formatter.result({
  "duration": 74649834,
  "status": "passed"
});
formatter.after({
  "duration": 226317435,
  "status": "passed"
});
formatter.after({
  "duration": 246829835,
  "status": "passed"
});
formatter.before({
  "duration": 2642448530,
  "status": "passed"
});
formatter.before({
  "duration": 2521083392,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "To verify title of dashboard page",
  "description": "",
  "id": "smoke-test-to-verify-page-title-of-each-page-of-the-application;to-verify-title-of-dashboard-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I open browser and launch application",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I login into appllication using valid credentials",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify the title of \"dashboard\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "WordPress_AllPagesTitle_Definition.launchApplication()"
});
formatter.result({
  "duration": 6311626052,
  "status": "passed"
});
formatter.match({
  "location": "WordPress_AllPagesTitle_Definition.login()"
});
formatter.result({
  "duration": 11354797870,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dashboard",
      "offset": 23
    }
  ],
  "location": "WordPress_AllPagesTitle_Definition.verifyTitle(String)"
});
formatter.result({
  "duration": 5010209899,
  "status": "passed"
});
formatter.match({
  "location": "WordPress_AllPagesTitle_Definition.close_the_browser()"
});
formatter.result({
  "duration": 70353410,
  "status": "passed"
});
formatter.after({
  "duration": 227481597,
  "status": "passed"
});
formatter.after({
  "duration": 258973510,
  "status": "passed"
});
formatter.before({
  "duration": 2656682079,
  "status": "passed"
});
formatter.before({
  "duration": 2479610215,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "To verify title of posts page",
  "description": "",
  "id": "smoke-test-to-verify-page-title-of-each-page-of-the-application;to-verify-title-of-posts-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I open browser and launch application",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I login into appllication using valid credentials",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "click on the \"posts\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I verify the title of \"posts\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "WordPress_AllPagesTitle_Definition.launchApplication()"
});
formatter.result({
  "duration": 5869962465,
  "status": "passed"
});
formatter.match({
  "location": "WordPress_AllPagesTitle_Definition.login()"
});
formatter.result({
  "duration": 9677908351,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "posts",
      "offset": 14
    }
  ],
  "location": "WordPress_AllPagesTitle_Definition.clickSideMenu(String)"
});
formatter.result({
  "duration": 7017870404,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "posts",
      "offset": 23
    }
  ],
  "location": "WordPress_AllPagesTitle_Definition.verifyTitle(String)"
});
formatter.result({
  "duration": 5018853204,
  "status": "passed"
});
formatter.match({
  "location": "WordPress_AllPagesTitle_Definition.close_the_browser()"
});
formatter.result({
  "duration": 73947722,
  "status": "passed"
});
formatter.after({
  "duration": 220093378,
  "status": "passed"
});
formatter.after({
  "duration": 262254824,
  "status": "passed"
});
formatter.before({
  "duration": 2639202090,
  "status": "passed"
});
formatter.before({
  "duration": 2582466010,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "To verify title of media page",
  "description": "",
  "id": "smoke-test-to-verify-page-title-of-each-page-of-the-application;to-verify-title-of-media-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "I open browser and launch application",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I login into appllication using valid credentials",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "click on the \"media\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I verify the title of \"media\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "WordPress_AllPagesTitle_Definition.launchApplication()"
});
formatter.result({
  "duration": 6573309792,
  "status": "passed"
});
formatter.match({
  "location": "WordPress_AllPagesTitle_Definition.login()"
});
formatter.result({
  "duration": 9034060347,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "media",
      "offset": 14
    }
  ],
  "location": "WordPress_AllPagesTitle_Definition.clickSideMenu(String)"
});
formatter.result({
  "duration": 6572140904,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "media",
      "offset": 23
    }
  ],
  "location": "WordPress_AllPagesTitle_Definition.verifyTitle(String)"
});
formatter.result({
  "duration": 5015346896,
  "status": "passed"
});
formatter.match({
  "location": "WordPress_AllPagesTitle_Definition.close_the_browser()"
});
formatter.result({
  "duration": 79624386,
  "status": "passed"
});
formatter.after({
  "duration": 358679286,
  "status": "passed"
});
formatter.after({
  "duration": 305213917,
  "status": "passed"
});
formatter.before({
  "duration": 2742492878,
  "status": "passed"
});
formatter.before({
  "duration": 2620197382,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "To verify title of comments page",
  "description": "",
  "id": "smoke-test-to-verify-page-title-of-each-page-of-the-application;to-verify-title-of-comments-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "I open browser and launch application",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I login into appllication using valid credentials",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "click on the \"comments\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I verify the title of \"comments\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "WordPress_AllPagesTitle_Definition.launchApplication()"
});
formatter.result({
  "duration": 3379110514,
  "status": "passed"
});
formatter.match({
  "location": "WordPress_AllPagesTitle_Definition.login()"
});
formatter.result({
  "duration": 10314484274,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "comments",
      "offset": 14
    }
  ],
  "location": "WordPress_AllPagesTitle_Definition.clickSideMenu(String)"
});
formatter.result({
  "duration": 7657163766,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "comments",
      "offset": 23
    }
  ],
  "location": "WordPress_AllPagesTitle_Definition.verifyTitle(String)"
});
formatter.result({
  "duration": 5014349122,
  "status": "passed"
});
formatter.match({
  "location": "WordPress_AllPagesTitle_Definition.close_the_browser()"
});
formatter.result({
  "duration": 74834149,
  "status": "passed"
});
formatter.after({
  "duration": 256285685,
  "status": "passed"
});
formatter.after({
  "duration": 256628661,
  "status": "passed"
});
formatter.before({
  "duration": 2663491831,
  "status": "passed"
});
formatter.before({
  "duration": 3155073903,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "To verify title of tools page",
  "description": "",
  "id": "smoke-test-to-verify-page-title-of-each-page-of-the-application;to-verify-title-of-tools-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 36,
  "name": "I open browser and launch application",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "I login into appllication using valid credentials",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "click on the \"tools\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I verify the title of \"tools\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "WordPress_AllPagesTitle_Definition.launchApplication()"
});
formatter.result({
  "duration": 3645493655,
  "status": "passed"
});
formatter.match({
  "location": "WordPress_AllPagesTitle_Definition.login()"
});
formatter.result({
  "duration": 11230274684,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tools",
      "offset": 14
    }
  ],
  "location": "WordPress_AllPagesTitle_Definition.clickSideMenu(String)"
});
formatter.result({
  "duration": 7805231676,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tools",
      "offset": 23
    }
  ],
  "location": "WordPress_AllPagesTitle_Definition.verifyTitle(String)"
});
formatter.result({
  "duration": 5015092441,
  "status": "passed"
});
formatter.match({
  "location": "WordPress_AllPagesTitle_Definition.close_the_browser()"
});
formatter.result({
  "duration": 71307378,
  "status": "passed"
});
formatter.after({
  "duration": 243902354,
  "status": "passed"
});
formatter.after({
  "duration": 254639456,
  "status": "passed"
});
});