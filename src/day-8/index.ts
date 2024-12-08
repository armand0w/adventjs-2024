
export function drawRace(indices: number[], length: number): string {
    let result: string[]
    let n = indices.length-1;
    let r = 1;

    result = indices.map(i => {
        let row: string = '~'.repeat(length)
        if ( i > 0 )
            row = `${'~'.repeat(i)}r${'~'.repeat(length-(i+1))}`
        if ( i < 0 )
            row = `${'~'.repeat(length-(-i))}r${'~'.repeat(Math.abs(i)-1)}`

        return `${' '.repeat(n--)}${row} /${r++}`
    })

    return result.join('\n')
}