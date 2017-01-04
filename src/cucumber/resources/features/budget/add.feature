@user
Feature: Add Budget

  Scenario: Add a new budget
    When add a budget with the following info
      | month   | amount |
      | 2016-02 | 2000   |
    Then I can see the following budget
      | month   | amount |
      | 2016-02 | 2000   |
