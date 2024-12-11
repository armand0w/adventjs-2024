import {decodeFilename} from './index'

describe('Day 11', () => {
    test('Test 1', () => {
        expect(decodeFilename('2023122512345678_sleighDesign.png.grinchwa')).toEqual('sleighDesign.png')
        expect(decodeFilename('42_chimney_dimensions.pdf.hack2023')).toEqual('chimney_dimensions.pdf')
        expect(decodeFilename('987654321_elf-roster.csv.tempfile')).toEqual('elf-roster.csv')
    })
})