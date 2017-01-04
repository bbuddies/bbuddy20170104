import angular from 'angular'
import accounts from './accounts'
import budgets from './budgets'
import dashboard from './dashboard'
import auth from './auth'

export default angular
    .module('components', [accounts, dashboard, auth, budgets])
    .name