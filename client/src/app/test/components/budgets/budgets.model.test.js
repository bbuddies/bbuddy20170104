import Budgets from '../../../components/budgets/budgets.model';

describe('budgets model', function() {
    let api, add, budgets, failure
    beforeEach(()=>{
        api = {
            budgets: {
                add: () => {}
            }
        }
        add = sinon.stub(api.budgets, "add")
        budgets = new Budgets(api)
        failure = sinon.spy()
    })
    it('add a budget successfully', function(){
        budgets.add({
            month: '2016-02',
            amount: '1000'
        }, failure)

        add.should.have.been.calledWith({
            month: '2016-02',
            amount: '1000'
        })
    })

    it('month should not be empty', () =>{
        budgets.add({
            month: '',
            amount: '1000'
        }, failure)

        add.should.not.have.been.called
        failure.should.have.been.calledWith({
            monthErrorMessage: 'Month is empty',
            amountErrorMessage: ''
        })
    })
    it('amount should not be empty', () =>{
        budgets.add({
            month: '2016-10',
            amount: ''
        }, failure)

        add.should.not.have.been.called
        failure.should.have.been.calledWith({
            monthErrorMessage: '',
            amountErrorMessage: 'Amount is empty'
        })
    })
    it('month should be yyyy-mm', () =>{
        budgets.add({
            month: 'aaa',
            amount: '1000'
        }, failure)

        add.should.not.have.been.called
        failure.should.have.been.calledWith({
            monthErrorMessage: 'Invalid input.',
            amountErrorMessage: ''
        })
    })
    it('month part should be a valid month', () =>{
        budgets.add({
            month: '2016-13',
            amount: '1000'
        }, failure)

        add.should.not.have.been.called
        failure.should.have.been.calledWith({
            monthErrorMessage: 'Invalid input.',
            amountErrorMessage: ''
        })
    })
})

