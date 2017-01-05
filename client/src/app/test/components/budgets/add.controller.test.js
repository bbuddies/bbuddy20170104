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

    it('add a empty month budget', () => {
        let model = {
            add: () => {}
        }
        let add = sinon.stub(model, 'add')
        let controller = new Controller(model)
        controller.budget.month = ''
        controller.budget.amount = 1000

        controller.save()

        add.should.not.have.been.called
    })

    it('add a empty amount budget', () => {
            let model = {
                add: () => {}
            }
            let add = sinon.stub(model, 'add')
            let controller = new Controller(model)
            controller.budget.month = '2016-12'
            controller.budget.amount = 0

            controller.save()

            add.should.not.have.been.called
    })

     it('add a empty month and amount budget', () => {
            let model = {
                add: () => {}
            }
            let add = sinon.stub(model, 'add')
            let controller = new Controller(model)
            controller.budget.month = ''
            controller.budget.amount = 0

            controller.save()

            add.should.not.have.been.called
     })




})
