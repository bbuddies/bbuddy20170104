import {Inject} from '../decorators'

@Inject('http')
export default class Budgets {
    constructor(http){
        this.http = http
    }
    add(budget, callback){
        this.http.post("budgets/add.json", budget, callback)
    }
}
