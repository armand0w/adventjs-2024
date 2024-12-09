type Space = '·' | '@' | '*' | 'o'
type Board = string[]
type Movement = 'U' | 'D' | 'R' | 'L'
type Result = 'none' | 'crash' | 'eat'

export function moveTrain(board: Board, mov: Movement): Result {
    const getRowCol = (row: number, col: number, mov: Movement): [number, number] => {
        switch (mov) {
            case 'U': return [row - 1, col];
            case 'D': return [row + 1, col];
            case 'L': return [row, col - 1];
            case 'R': return [row, col + 1];
        }
    };

    const getNextSpace = (row: number, col: number, mov: Movement): string | undefined => {
        const [newRow, newCol] = getRowCol(row, col, mov);
        return board[newRow]?.[newCol];
    };

    // Encontrar la cabeza del tren
    let found = false;
    let row = 0;
    let col = 0;
    while (row < board.length && !found) {
        col = board[row].indexOf('@');
        if (col !== -1) {
            found = true;
            break;
        }
        row++;
    }

    // Simular el movimiento y verificar el resultado
    const nextSpace = getNextSpace(row, col, mov);
    if (nextSpace === undefined) return 'crash'; // Choque con el borde
    if (nextSpace === 'o') return 'crash'; // Choque consigo mismo
    if (nextSpace === '*') return 'eat';
    return 'none';
}