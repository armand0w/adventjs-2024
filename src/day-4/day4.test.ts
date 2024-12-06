import { createXmasTree } from './index'

describe('Day 4', () => {
    test('Test 1', () => {
        const tree = createXmasTree(5, '*')
        expect(tree).toEqual(
            '____*____\n' + // 4, 1
            '___***___\n' + // 3, 3
            '__*****__\n' + // 2, 5
            '_*******_\n' + // 1, 7
            '*********\n' + // 0, 9
            '____#____\n' + // 4, 1
            '____#____')    // 4, 1
    })

    test('Test 2', () => {
        const tree2 = createXmasTree(3, '+')
        expect(tree2).toEqual(
            '__+__\n' + // 2, 1
            '_+++_\n' + // 1, 3
            '+++++\n' + // 0, 5
            '__#__\n' + // 2, 1
            '__#__')    // 2, 1
    })

    test('Test 3', () => {
        const tree3 = createXmasTree(6, '@')
        expect(tree3).toEqual(
            '_____@_____\n' + // 5, 1
            '____@@@____\n' + // 4, 3
            '___@@@@@___\n' + // 3, 5
            '__@@@@@@@__\n' + // 2, 7
            '_@@@@@@@@@_\n' + // 1, 9
            '@@@@@@@@@@@\n' + // 0, 11
            '_____#_____\n' + // 5, 1
            '_____#_____')    // 5, 1
    })

})