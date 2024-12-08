import { fixPackages } from './index'

describe('Day 7', () => {
    test('Test 1', () => {
       expect(fixPackages('a(cb)de'))
           .toEqual('abcde')
    })

    test('Test 2', () => {
        expect(fixPackages('a(bc(def)g)h'))
            .toEqual('agdefcbh')
    })

    test('Test 3', () => {
        expect(fixPackages('abc(def(gh)i)jk'))
            .toEqual('abcighfedjk')

        expect(fixPackages('abc(def(gh)i)jk(zyx)'))
            .toEqual('abcighfedjkxyz')
    })

    test('Test 4', () => {
        expect(fixPackages('a(b(c))e'))
            .toEqual('acbe')
    })
})