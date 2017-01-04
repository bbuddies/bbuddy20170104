import angular from 'angular'

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
    })
    .config(routing)
    .name

