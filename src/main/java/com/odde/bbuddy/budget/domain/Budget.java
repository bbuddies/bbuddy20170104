package com.odde.bbuddy.budget.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "budgets")
@Setter
@Getter
public class Budget {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String month;
    private int amount;
}
