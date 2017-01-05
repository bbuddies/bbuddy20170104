import {Inject} from '../../common/decorators'

@Inject('budgetsModel')
export default class BudgetsAddController {
    constructor(budgets) {
        this.budgets = budgets
        this.budget = {
            month: '',
            amount: ''
        }
        this.monthErrorMessage = ''
        this.amountErrorMessage = ''
    }
    checkInput() {
        let valid = true
        if(!this.budget.month){
            this.monthErrorMessage = 'Month is empty'
            valid = false
         }
        if(!this.budget.amount){
             this.amountErrorMessage = 'Amount is empty'
             valid = false
         }

        if (valid && this.budget.month.length != 7) {
            this.monthErrorMessage = 'Invalid input.'
            valid = false
        }
        let year = this.budget.month.substring(0,4)
        let month = this.budget.month.substring(5,7)
        let int_month = parseInt(month)
        if (valid && (int_month < 0 || int_month > 12)) {
            this.monthErrorMessage = 'Invalid input.'
            valid = false
        }
        if (valid && this.budget.amount < 0) {
             this.amountErrorMessage = 'Invalid input.'
             valid = false
        }
        return valid
    }
    save(){
        if (this.checkInput()) {
            this.budgets.add(this.budget, (errors)=>{
                this.monthErrorMessage = errors.monthErrorMessage
                this.amountErrorMessage = errors.amountErrorMessage
            })
        }
    }
}
