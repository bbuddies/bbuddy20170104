import {Inject} from '../../common/decorators'

@Inject('budgetsModel')
export default class BudgetsAddController {
    constructor(budgets) {
        this.budgets = budgets
        this.budget = {
            month: '',
            amount: ''
        }
    }
    save(){
        this.budgets.add(this.budget)
    }
}
