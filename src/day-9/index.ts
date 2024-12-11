type Space = '·' | '@' | '*' | 'o'
type Board = string[]
type Movement = 'U' | 'D' | 'R' | 'L'
type Result = 'none' | 'crash' | 'eat'

export function moveTrain(board: Board, mov: Movement): Result {
    const rows = board.length;
    const cols = board[0].length;

    // Encuentra la posición de la locomotora (@)
    let headRow = -1;
    let headCol = -1;
    for ( let r = 0; r < rows; r++ ) {
        const col = board[r].indexOf('@');
        if ( col !== -1 ) {
            headRow = r;
            headCol = col;
            break;
        }
    }

    // Mapa de desplazamientos
    const movements: Record<Movement, [number, number]> = {
        U: [-1, 0],
        D: [1, 0],
        L: [0, -1],
        R: [0, 1],
    };

    // Calcula la nueva posición de la cabeza del tren
    const [rowOffset, colOffset] = movements[mov];
    const newRow = headRow + rowOffset;
    const newCol = headCol + colOffset;

    // Genera un mapa válido de posiciones en el tablero
    const validPositions = new Map<string, Space>();
    for ( let r = 0; r < rows; r++ ) {
        for ( let c = 0; c < cols; c++ ) {
            validPositions.set(`${r},${c}`, board[r][c] as Space);
        }
    }

    // Verifica si la posición es válida
    const positionKey = `${newRow},${newCol}`;
    if ( !validPositions.has(positionKey) ) {
        return 'crash';
    }

    // Obtiene el contenido del nuevo espacio y retorna el resultado
    const spaceResults: Record<Space, Result> = {
        '·': 'none',
        '@': 'crash',
        '*': 'eat',
        'o': 'crash',
    };

    const newSpace = validPositions.get(positionKey) as Space;
    return spaceResults[newSpace];
}