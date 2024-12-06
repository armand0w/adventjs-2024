import { inBox } from './index'

describe('Day 6', () => {
    test('Test 1', () => {
        expect(inBox([
            "###",
            "#*#",
            "###"
        ])).toBeTruthy()
    })

    test('Test 2', () => {
        expect(inBox([
            "####",
            "#* #",
            "#  #",
            "####"
        ])).toBeTruthy()
    })

    test('Test 3', () => {
        expect(inBox([
            "#####",
            "#   #",
            "#  #*",
            "#####"
        ])).toBeFalsy()
    })

    test('Test 4', () => {
        expect(inBox([
            "#####",
            "#   #",
            "#   #",
            "#   #",
            "#####"
        ])).toBeFalsy()
    })

    test('Test 5', () => {
        expect(inBox([
            "#####",
            "*#  #",
            "#   #",
            "#####"
        ])).toBeFalsy()
    })

    test('Test 6', () => {
        expect(inBox([
            "#*#",
            "###",
            "###"
        ])).toBeFalsy()
    })
})