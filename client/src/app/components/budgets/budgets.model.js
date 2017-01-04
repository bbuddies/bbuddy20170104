import {Inject} from '../../common/decorators'

@Inject('api')
export default class Budgets {
    constructor(api){
        this.api = api
    }
    add(budget){
        this.api.budgets.add(budget)
    }
}