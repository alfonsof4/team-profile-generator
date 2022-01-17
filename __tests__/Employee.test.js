const Employee = require('../lib/Employee')

describe('Employee Class', () => {
    describe('Initialization', () => {
        it('Should create object containing name and id', () => {
            const employee = new Employee(456, 'Max')

            expect(employee.id).toEqual(456);
            expect(employee.name).toEqual('Max');
        });
    });
});