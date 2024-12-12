import { isRobotBack } from './index'

describe('Day 12', () => {
    test('Test', () => {
        expect(isRobotBack(['R'])).toEqual([1, 0])
        expect(isRobotBack(['R', 'L'])).toEqual(true)
        expect(isRobotBack(['R', 'L', 'U', 'D'])).toEqual(true)
        expect(isRobotBack(['*', 'R', 'U'])).toEqual([2, 1])
        expect(isRobotBack(['R', '*', 'U'])).toEqual([1, 2])
        expect(isRobotBack(['L', 'L', 'L', '!', 'R'])).toEqual([-4, 0])
        expect(isRobotBack(['R', '?', 'R'])).toEqual([1, 0])
        expect(isRobotBack(['U', '?', 'D'])).toEqual(true)
        expect(isRobotBack(['R', '!', 'L'])).toEqual([2, 0])
        expect(isRobotBack(['U', '!', 'D'])).toEqual([0, 2])
        expect(isRobotBack(['R', '?', 'L'])).toEqual(true)
        expect(isRobotBack(['U', '?', 'U'])).toEqual([0, 1])
        expect(isRobotBack(['*', 'U', '?', 'U'])).toEqual([0, 2])
        expect(isRobotBack(['R', '!', 'U', '?', 'U'])).toEqual([1, 0])
        expect(isRobotBack(['R', '?', 'R'])).toEqual([1, 0])
        expect(isRobotBack(['U', '?', 'U'])).toEqual([0, 1])
        expect(isRobotBack(['*', 'U', '?', 'U'])).toEqual([0, 2])
    })
})