import Budgets from '../../../components/budgets/budgets.model';

describe('budgets model', function() {
    it('add a budget successfully', function(){
        let api = {
            budgets: {
                add: () => {}
            }
        }
        let add = sinon.stub(api.budgets, "add")
        let budgets = new Budgets(api)
        budgets.add({
            month: '2016-02',
            amount: 1000
        })

        add.should.have.been.calledWith({
            month: '2016-02',
            amount: 1000
        })
    })
})
