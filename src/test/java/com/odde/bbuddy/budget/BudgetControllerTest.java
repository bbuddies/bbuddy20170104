package com.odde.bbuddy.budget;

import com.odde.bbuddy.budget.controller.BudgetController;
import com.odde.bbuddy.budget.domain.Budget;
import com.odde.bbuddy.budget.domain.Budgets;
import org.junit.Test;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;

public class BudgetControllerTest {
    
    @Test
    public void should_add_budget() {
        Budgets mockBudgets = mock(Budgets.class);
        BudgetController controller = new BudgetController(mockBudgets);

        Budget budget = new Budget();
        controller.addBudget(budget);

        verify(mockBudgets).add(budget);
    }
}
