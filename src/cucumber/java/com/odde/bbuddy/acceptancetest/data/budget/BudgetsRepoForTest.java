package com.odde.bbuddy.acceptancetest.data.budget;

import com.odde.bbuddy.budget.domain.Budget;
import org.springframework.data.repository.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
public interface BudgetsRepoForTest extends Repository<Budget, Long> {
    List<Budget> findAll();
}
