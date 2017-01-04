package com.odde.bbuddy.acceptancetest.steps;

import com.odde.bbuddy.acceptancetest.data.budget.EditableBudget;
import com.odde.bbuddy.acceptancetest.driver.UiDriver;
import cucumber.api.DataTable;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class BudgetSteps {

    @Autowired
    UiDriver uiDriver;

    @When("^add a budget with the following info$")
    public void add_a_budget_with_the_following_info(List<EditableBudget> budgets) throws Throwable {
        uiDriver.waitForTextPresent("BBuddy");
        uiDriver.findLinkByText("Budgets").click();
        uiDriver.waitForTextPresent("Month");
        EditableBudget budget = budgets.get(0);
        uiDriver.findElementByName("month").sendKeys(budget.getMonth());
        uiDriver.findElementByName("amount").sendKeys(budget.getAmount());
        uiDriver.findElementById("save").click();
    }

    @Then("^I can see the following budget$")
    public void i_can_see_the_following_budget(DataTable arg1) throws Throwable {
    }
}
