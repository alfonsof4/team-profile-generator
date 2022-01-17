const Manager = require('../lib/Manager')

describe('Manager Class', () => {
    describe('Initialization', () => {
        it('Should create object containing name and id', () => {
            const manager = new Manager(456, 'Max')

            expect(manager.id).toEqual(456);
            expect(manager.name).toEqual('Max');
        });
    });
});