@user @budget
Feature: Add Budget

  Scenario: Add a new budget
    When add a budget with the following info
      | month   | amount |
      | 2016-02 | 2000   |
    Then I can see the following budget
      | month   | amount |
      | 2016-02 | 2000   |

  Scenario: Override a new budget
    Given There is existing record
      | month   | amount |
      | 2016-02 | 2000   |
    When add a budget with the following info
      | month   | amount |
      | 2016-02 | 3000   |
    Then I can see the following budget
      | month   | amount |
      | 2016-02 | 3000   |

  Scenario Outline: check budget input empty
    When add a budget with the following info
    | month | amount |
    | <month> | <amount>|
    Then I can see empty error massage

    Examples:
      | month   | amount |
      | 2016-04 |        |
      |         | 3000   |
      |         |        |

