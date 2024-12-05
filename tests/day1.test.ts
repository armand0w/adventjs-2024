import { prepareGifts } from '../src/day-1'

describe('Day 1', () => {
    test('Test 1', () => {
        const gifts1 = [3, 1, 2, 3, 4, 2, 5]
        const preparedGifts1 = prepareGifts(gifts1)
        expect(preparedGifts1).toEqual([1, 2, 3, 4, 5])
    })

    test('Test 2', () => {
        const gifts2 = [6, 5, 5, 5, 5]
        const preparedGifts2 = prepareGifts(gifts2)
        expect(preparedGifts2).toEqual([5, 6]);
    })

    test('Test 3', () => {
        const gifts3: number[] = []
        const preparedGifts3 = prepareGifts(gifts3)
        expect(preparedGifts3).toEqual([]);
    })

    test('Test decimal', () => {
        const gifts3 = [ 2.0, 5.88, 2.0]
        const preparedGifts3 = prepareGifts(gifts3)
        expect(preparedGifts3).toEqual([ 2.0, 5.88]);
    })
})