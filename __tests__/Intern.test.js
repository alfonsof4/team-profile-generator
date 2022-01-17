const Intern = require('../lib/Intern')

describe('Intern Class', () => {
    describe('Initialization', () => {
        it('Should create object containing name and id', () => {
            const intern = new Intern(456, 'Max')

            expect(intern.id).toEqual(456);
            expect(intern.name).toEqual('Max');
        });
    });
});