$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Report_Cucumber.feature");
formatter.feature({
  "line": 1,
  "name": "This is to learn Report generation in Cucumber framework",
  "description": "",
  "id": "this-is-to-learn-report-generation-in-cucumber-framework",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3795899599,
  "status": "passed"
});
formatter.before({
  "duration": 2487182932,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Generating report at the end of test execution",
  "description": "",
  "id": "this-is-to-learn-report-generation-in-cucumber-framework;generating-report-at-the-end-of-test-execution",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I open yahoo home url",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on link",
  "rows": [
    {
      "cells": [
        "link",
        "News"
      ],
      "line": 6
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "page title must conatin link",
  "keyword": "Then "
});
formatter.match({
  "location": "Report_Cucumber_Definition.openyahoo()"
});
formatter.result({
  "duration": 11837824820,
  "status": "passed"
});
formatter.match({
  "location": "Report_Cucumber_Definition.clickOnLink(DataTable)"
});
formatter.result({
  "duration": 8052585966,
  "status": "passed"
});
formatter.match({
  "location": "Report_Cucumber_Definition.verifyTitleForLink()"
});
formatter.result({
  "duration": 1020232311,
  "status": "passed"
});
formatter.after({
  "duration": 348490424,
  "status": "passed"
});
formatter.after({
  "duration": 312860421,
  "status": "passed"
});
});