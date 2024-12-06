import { createFrame } from './index'

describe('Day 2', () => {
    test('Test 1', () => {
        let m = createFrame(['midu', 'madeval', 'educalvolpz'])
        expect(m).toEqual('***************\n' +
            '* midu        *\n' +
            '* madeval     *\n' +
            '* educalvolpz *\n' +
            '***************')
    })

    test('Test 2', () => {
        let m2 = createFrame(['midu'])
        expect(m2).toEqual('********\n' +
            '* midu *\n' +
            '********')
    })

    test('Test 3', () => {
        let m3 = createFrame(['a', 'bb', 'ccc'])
        expect(m3).toEqual('*******\n' +
            '* a   *\n' +
            '* bb  *\n' +
            '* ccc *\n' +
            '*******')
    })

})