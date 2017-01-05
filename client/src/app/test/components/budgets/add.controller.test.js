import Controller from '../../../components/budgets/add.controller';

describe('budgets add controller', () => {
    it('add a budget successfully', () => {
        let model = {
            add: () => {}
        }
        let add = sinon.stub(model, 'add')
        let controller = new Controller(model)
        controller.budget.month = '2016-02'
        controller.budget.amount = 1000

        controller.save()

        add.should.have.been.calledWith({
            month: '2016-02',
            amount: 1000
        })
    })
    it('Invalid month input', () => {
       let model = {
                add: () => {}
            }
        let add = sinon.stub(model, 'add')
        let controller = new Controller(model)
        controller.budget.month = "2016-13"
        controller.budget.amount = 1000

        controller.save()

        add.should.not.have.been.calledWith({
            month: "2016-13",
            amount: 1000
        })
        controller.errorMessage.should.equal("Invalid input.")
    })
    it('Check invalid month input', () => {
       let model = {
                    add: () => {}
                }
        let add = sinon.stub(model, 'add')
        let controller = new Controller(model)
        controller.budget.month = "2016-13"
        controller.budget.amount = 1000

        let result = controller.checkInput()

        result.should.be.false
    })
})
