import Controller from '../../../components/budgets/add.controller';

describe('budgets add controller', () => {
    let model, add, controller
    beforeEach(() => {
        model = {
            add: () => {
            }
        }
        add = sinon.stub(model, 'add')
        controller = new Controller(model)
        controller.budget.month = '2016-02'
        controller.budget.amount = 1000
    })
    it('add a budget successfully', () => {
        controller.save()

        add.should.have.been.calledWith({
            month: '2016-02',
            amount: 1000
        })
    })

    it('add a empty month budget', () => {
        controller.budget.month = ''

        controller.save()

        add.should.not.have.been.called
        controller.monthErrorMessage.should.equal("Month is empty")
    })
    // it('add a empty month budget', () => {
    //     controller.budget.month = ''
    //
    //     controller.save()
    //     controller.budget.month = '2016-10'
    //
    //     controller.monthErrorMessage.should.be.empty
    // })

    it('add a empty amount budget', () => {
        controller.budget.amount = ''

        controller.save()

        add.should.not.have.been.called
        controller.amountErrorMessage.should.equal("Amount is empty")
    })

    it('add a empty month and amount budget', () => {
        controller.budget.month = ''
        controller.budget.amount = ''

        controller.save()

        add.should.not.have.been.called
        controller.monthErrorMessage.should.equal("Month is empty")
        controller.amountErrorMessage.should.equal("Amount is empty")
    })

    it('Invalid month input', () => {
        controller.budget.month = "2016-13"

        controller.save()

        add.should.not.have.been.called
        controller.monthErrorMessage.should.equal("Invalid input.")
    })
    it('Check invalid amount input', () => {
        controller.budget.amount = -1000

        controller.save()

        add.should.not.have.been.called
        controller.amountErrorMessage.should.equal("Invalid input.")
    })


})
