import angular from 'angular'
import http from './http'
import api from './api'
import auth from './auth'
import accounts from './accounts'
import budgets from './budgets'

export default angular
    .module('api', [])
    .service('http', http)
    .service('api', api)
    .service('authApi', auth)
    .service('accountsApi', accounts)
    .service('budgetsApi', budgets)
    .name
