package com.odde.bbuddy.budget.domain;

import com.odde.bbuddy.budget.repo.BudgetRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class Budgets {
    private final BudgetRepo budgetRepo;

    @Autowired
    public Budgets(BudgetRepo budgetRepo) {
        this.budgetRepo = budgetRepo;
    }

    public void add(Budget budget) {
        List<Budget> budgetlist = budgetRepo.findAll();
        if (budget.getAmount()>=0) {
            for (Budget budgetItem : budgetlist) {
                if (budgetItem.getMonth().equals(budget.getMonth())) {
                    budgetItem.setAmount(budget.getAmount());
                    budgetRepo.save(budgetItem);
                    return;
                }
            }
            budgetRepo.save(budget);
        }
    }
}
