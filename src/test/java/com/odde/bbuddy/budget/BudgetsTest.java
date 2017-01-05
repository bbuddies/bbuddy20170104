package com.odde.bbuddy.budget;

import com.odde.bbuddy.budget.domain.Budget;
import com.odde.bbuddy.budget.domain.Budgets;
import com.odde.bbuddy.budget.repo.BudgetRepo;
import org.junit.Test;
import org.mockito.ArgumentCaptor;

import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.*;

public class BudgetsTest {
    
    @Test
    public void save_budget() {
        BudgetRepo mockBudgetRepo = mock(BudgetRepo.class);
        Budgets budgets = new Budgets(mockBudgetRepo);

        Budget budget = new Budget();
        budgets.add(budget);

        verify(mockBudgetRepo).save(budget);
    }
    @Test
    public void Override_budget() {
        BudgetRepo mockBudgetRepo = mock(BudgetRepo.class);
        Budget budget = new Budget();
        budget.setId(10);
        budget.setAmount(2000);
        budget.setMonth("2016-02");
        List<Budget> budgetList = new ArrayList<>();
        budgetList.add(budget);
        when(mockBudgetRepo.findAll()).thenReturn(budgetList);
        Budgets budgets = new Budgets(mockBudgetRepo);

        Budget budgetNew = new Budget();
        budgetNew.setAmount(3000);
        budgetNew.setMonth("2016-02");
        budgets.add(budgetNew);

        ArgumentCaptor<Budget> captor = ArgumentCaptor.forClass(Budget.class);

        verify(mockBudgetRepo).save(captor.capture());
        assertThat(captor.getValue().getId()).isEqualTo(10);
        assertThat(captor.getValue().getAmount()).isEqualTo(3000);
        assertThat(captor.getValue().getMonth()).isEqualTo("2016-02");

    }

    @Test
    public void InputInvalid() {
        BudgetRepo mockBudgetRepo = mock(BudgetRepo.class);
        Budgets budgets = new Budgets(mockBudgetRepo);

        Budget budget = new Budget();
        budget.setAmount(-1000);
        budget.setMonth("2016-02");
        budgets.add(budget);

        verify(mockBudgetRepo,never()).save(budget);
    }
}
