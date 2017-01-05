import {Inject} from '../../common/decorators'

@Inject('budgetsModel')
export default class BudgetsAddController {
    constructor(budgets) {
        this.budgets = budgets
        this.budget = {
            month: '',
            amount: ''
        }
        this.MonthErrorMessage = ''
        this.AmountErrorMassage = ''
    }
    checkInput() {

        if(!this.budget.month){
            this.MonthEmptyErrorMessage = 'Month is empty'
            return false
         }
        if(!this.budget.amount){
             this.AmountEmptyErrorMassage = 'Amount is empty'
             return false
         }

        if (this.budget.month.length != 7) {
            this.MonthEmptyErrorMessage = 'Invalid input.'
            return false
        }
        let year = this.budget.month.substring(0,4)
        let month = this.budget.month.substring(5,7)
        let int_month = parseInt(month)
        if (int_month < 0 || int_month > 12) {
            this.MonthEmptyErrorMessage = 'Invalid input.'
            return false
        }
        if (this.budget.amount < 0) {
             this.MonthEmptyErrorMessage = 'Invalid input.'
             return false
        }
        return true
    }
    save(){
        if (this.checkInput()) {
            this.budgets.add(this.budget)
        }
    }
}
