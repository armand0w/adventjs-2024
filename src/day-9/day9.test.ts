import { moveTrain } from './index'

describe('Day 9', () => {
    test('Test 1', () => {
        const board = [
            '·····',
            '*····',
            '@····',
            'o····',
            'o····'
        ]

        expect(moveTrain(board, 'U')).toEqual('eat')
        expect(moveTrain(board, 'D')).toEqual('crash')
        expect(moveTrain(board, 'L')).toEqual('crash')
        expect(moveTrain(board, 'R')).toEqual('none')
    })

    test('Test 2', () => {
        const board = [
            "·····",
            "·····",
            "*·o@·",
            "··o··",
            "··o··"
        ]

        expect(moveTrain(board, 'L')).toEqual('crash')
    })

    test('Test 3', () => {
        const board = [
            "·····",
            "··@··",
            "··*··",
            "·····",
            "·····"
        ]

        expect(moveTrain(board, 'D')).toEqual('eat')
    })

    test('Test 4', () => {
        const board = [
            "·····",
            "··*··",
            "··@··",
            "··o··",
            "··o··"
        ]

        expect(moveTrain(board, 'R')).toEqual('none')
    })
})
