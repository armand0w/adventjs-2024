
export function isRobotBack(moves: string[]): true | [number, number] {
    let x = 0
    let y = 0
    let doubleMove = false
    let invertNext = false
    const executedMoves = new Set<string>()

    const applyMovement: Record<string, () => void> = {
        'L': () => x--,
        'R': () => x++,
        'U': () => y++,
        'D': () => y--,
    }

    const invertMove: Record<string, string> = {
        'L': 'R',
        'R': 'L',
        'U': 'D',
        'D': 'U',
    }

    for ( let i = 0; i < moves.length; i++ ) {
        let move = moves[i]

        if ( move === '*' ) {
            doubleMove = true
            continue
        }

        if ( move === '!' ) {
            invertNext = true
            continue
        }

        if ( move === '?' ) {
            const nextMove = moves[i + 1]
            if ( nextMove && executedMoves.has(nextMove) ) {
                i++
                continue
            }
        }

        if ( invertNext ) {
            move = invertMove[move]
            invertNext = false
        }

        applyMovement[move]?.()

        if ( doubleMove ) {
            applyMovement[move]?.()
            doubleMove = false
        }

        executedMoves.add(move)
    }

    return (x === 0 && y === 0) ? true : [x, y];
}