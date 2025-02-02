import { organizeInventory } from './index'

describe('Day 3', () => {
    test('Test 1', () => {
        const inventory = [
            { name: 'doll', quantity: 5, category: 'toys' },
            { name: 'car', quantity: 3, category: 'toys' },
            { name: 'ball', quantity: 2, category: 'sports' },
            { name: 'car', quantity: 2, category: 'toys' },
            { name: 'racket', quantity: 4, category: 'sports' }
        ]

        let result = organizeInventory(inventory)
        expect(result).toEqual({
            toys: {
                doll: 5,
                car: 5
            },
            sports: {
                ball: 2,
                racket: 4
            }
        })
    })

    test('Test 2', () => {
        const inventory2 = [
            { name: 'book', quantity: 10, category: 'education' },
            { name: 'book', quantity: 5, category: 'education' },
            { name: 'paint', quantity: 3, category: 'art' }
        ]

        let result2 = organizeInventory(inventory2)
        expect(result2).toEqual({
            education: {
                book: 15
            },
            art: {
                paint: 3
            }
        })
    })

})