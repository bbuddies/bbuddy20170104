package com.odde.bbuddy.acceptancetest.data.budget;

import com.odde.bbuddy.budget.domain.Budget;
import org.springframework.data.repository.Repository;

import java.util.List;

public interface BudgetsRepoForTest extends Repository<Budget, Long> {
    List<Budget> findAll();
}
