import {Inject} from '../../common/decorators'

@Inject('budgetsModel')
export default class BudgetsAddController {
    constructor(budgets) {
        this.budgets = budgets
        this.errorMessage = ''
        this.budget = {
            month: '',
            amount: ''
        }
    }
    checkInput() {
        if (this.budget.month.length != 7) {
            return false
        }
        let year = this.budget.month.substring(0,4)
        let month = this.budget.month.substring(5,7)
        let int_month = parseInt(month)
        if (int_month < 0 || int_month > 12) {
            return false
        }
        return true
    }
    save(){
        if (this.checkInput()) {
            this.budgets.add(this.budget)
        } else {
            this.errorMessage = "Invalid input."
        }
    }
}
