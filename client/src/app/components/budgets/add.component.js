import angular from 'angular'
import Controller from './add.controller'

function routing($stateProvider) {
    $stateProvider
        .state('budgetsAdd', {
            parent: 'app',
            url: '/budgets/add',
            component: 'budgetsAdd',
            data:{
                requireAuth: true
            }
        });
}
routing.$inject = ['$stateProvider']

export default angular
    .module('budgets.add', [])
    .component('budgetsAdd', {
        template: require('./add.html'),
        controller: Controller
    })
    .config(routing)
    .name

