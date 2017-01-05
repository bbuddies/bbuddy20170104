import {Inject} from '../../common/decorators'
import _ from 'lodash'

@Inject('api')
export default class Budgets {
    constructor(api){
        this.api = api
    }
    checkFormat(month){
        let [yearSegment, monthSegment] = month.split('-')
        yearSegment = parseInt(yearSegment)
        monthSegment = parseInt(monthSegment)
        return _.isInteger(yearSegment) && _.isInteger(monthSegment) && _.inRange(monthSegment, 1, 12) ? '' : 'Invalid input.'
    }
    add(budget, failure){
        let errors = {
            monthErrorMessage: budget.month.length ? this.checkFormat(budget.month) : 'Month is empty',
            amountErrorMessage: budget.amount.length ? '' : 'Amount is empty',
        }
        if (_(errors).chain().values().compact().value().length){
            failure(errors)
            return
        }
        this.api.budgets.add(budget)
    }
}