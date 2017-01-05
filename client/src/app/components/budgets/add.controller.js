import {Inject} from '../../common/decorators'

@Inject('budgetsModel')
export default class BudgetsAddController {
    constructor(budgets) {
        this.budgets = budgets
        this.budget = {
            month: '',
            amount: ''
        }
        this.MonthEmptyErrorMessage = ''
        this.AmountEmptyErrorMassage = ''
    }
    save(){
        if(this.budget.month && this.budget.amount){
            this.budgets.add(this.budget)
        }
        if(!this.budget.month){
            this.MonthEmptyErrorMessage = 'Month is empty'
        }
        if(!this.budget.amount){
            this.AmountEmptyErrorMassage = 'Amount is empty'
        }

    }
}
