import { compile } from './index'

describe('Day 10', () => {
    test('Test 1', () => {
        const instructions = [
            'MOV -1 C', // copia -1 al registro 'C',
            'INC C', // incrementa el valor del registro 'C'
            'JMP C 1', // salta a la instrucción en el índice 1 si 'C' es 0
            'MOV C A', // copia el registro 'C' al registro 'a',
            'INC A' // incrementa el valor del registro 'a'
        ]

        expect(compile(instructions)).toEqual(2)
    })

    test('Test 2', () => {
        expect(compile([
            "MOV 2 X",
            "DEC X",
            "DEC X",
            "JMP X 1",
            "MOV X A"
        ])).toEqual(-2)
    })
})
