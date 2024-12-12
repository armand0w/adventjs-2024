import { calculatePrice } from './index'

describe('Day 12', () => {
    test('Test 1', () => {
        expect(calculatePrice('***')).toEqual(3)  // 3   (1 + 1 + 1)
        expect(calculatePrice('*o')).toEqual(4)   // 4   (5 - 1)
        expect(calculatePrice('o*')).toEqual(6)   // 6   (5 + 1)
        expect(calculatePrice('*o*')).toEqual(5)  // 5  (-1 + 5 + 1)
        expect(calculatePrice('**o*')).toEqual(6) // 6  (1 - 1 + 5 + 1)
        expect(calculatePrice('o***')).toEqual(8) // 8   (5 + 3)
        expect(calculatePrice('*o@')).toEqual(94)  // 94  (-5 - 1 + 100)
        expect(calculatePrice('*#')).toEqual(49)   // 49  (-1 + 50)
        expect(calculatePrice('@@@')).toEqual(300)  // 300 (100 + 100 + 100)
        expect(calculatePrice('#@')).toEqual(50)   // 50  (-50 + 100)
        expect(calculatePrice('#@Z')).toEqual(undefined) // undefined (Z es desconocido)
    })
})