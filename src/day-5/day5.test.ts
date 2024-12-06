import { organizeShoes, Shoe } from './index'

describe('Day 5', () => {
    test('Test 1', () => {
        const shoes = [
            { type: 'I', size: 38 },
            { type: 'R', size: 38 },
            { type: 'R', size: 42 },
            { type: 'I', size: 41 },
            { type: 'I', size: 42 }
        ] as Shoe[]

        let result = organizeShoes(shoes)
        expect(result).toEqual([38, 42])
    })

    test('Test 2', () => {
        const shoes2 = [
            { type: 'I', size: 38 },
            { type: 'R', size: 38 },
            { type: 'I', size: 38 },
            { type: 'I', size: 38 },
            { type: 'R', size: 38 }
        ] as Shoe[]

        let result2 = organizeShoes(shoes2)
        expect(result2).toEqual([38, 38])
    })

    test('Test 3', () => {
        const shoes3 = [
            { type: 'I', size: 38 },
            { type: 'R', size: 36 },
            { type: 'R', size: 42 },
            { type: 'I', size: 41 },
            { type: 'I', size: 43 }
        ] as Shoe[]

        let result3 = organizeShoes(shoes3)
        expect(result3).toEqual([])
    })

})