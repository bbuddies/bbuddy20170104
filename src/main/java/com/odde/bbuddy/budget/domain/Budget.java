package com.odde.bbuddy.budget.domain;

import javax.persistence.*;

@Entity
@Table(name = "budgets")
public class Budget {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String month;
    private int amount;
}
