import {Inject} from '../../common/decorators'

@Inject()
export default class BudgetsAddController {
    constructor(budgets) {
        this.budgets = budgets
        this.budget = {
            month: '',
            amount: 0
        }
    }
    save(){
        this.budgets.add(this.budget)
    }
}
