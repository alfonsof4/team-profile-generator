const Engineer = require('../lib/Engineer')

describe('Engineer Class', () => {
    describe('Initialization', () => {
        it('Should create object containing name and id', () => {
            const engineer = new Engineer(456, 'Max')

            expect(engineer.id).toEqual(456);
            expect(engineer.name).toEqual('Max');
        });
    });
});