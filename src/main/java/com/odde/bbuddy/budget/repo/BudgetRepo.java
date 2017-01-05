package com.odde.bbuddy.budget.repo;

import com.odde.bbuddy.budget.domain.Budget;
import org.springframework.data.repository.Repository;

import javax.transaction.Transactional;
import java.util.List;
@Transactional
public interface BudgetRepo extends Repository<Budget, Long> {
    void save(Budget budget);

    List<Budget> findAll();
}
