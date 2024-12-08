import { drawRace } from './index'

describe('Day 8', () => {
    test('Test 1', () => {
        expect(drawRace([0, 5, -3], 10))
            .toEqual('' +
                '  ~~~~~~~~~~ /1\n' +
                ' ~~~~~r~~~~ /2\n' +
                '~~~~~~~r~~ /3')
    })

    test('Test 2', () => {
        expect(drawRace([2, -1, 0, 5], 8))
            .toEqual('' +
                '   ~~r~~~~~ /1\n' +
                '  ~~~~~~~r /2\n' +
                ' ~~~~~~~~ /3\n' +
                '~~~~~r~~ /4')
    })

    test('Test 3', () => {
        expect(drawRace([3, 7, -2], 12))
            .toEqual('' +
                '  ~~~r~~~~~~~~ /1\n' +
                ' ~~~~~~~r~~~~ /2\n' +
                '~~~~~~~~~~r~ /3')
    })
})