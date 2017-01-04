import {Inject} from '../decorators'

@Inject('authApi', 'accountsApi', 'budgetsApi')
export default class Api {
    constructor(auth, accounts, budgets){
        this.auth = auth
        this.accounts = accounts
        this.budgets = budgets
    }
}