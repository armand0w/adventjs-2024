
export function compile (instructions: string[]): number {
    const registers: Record<string, number> = {}; // Diccionario para almacenar los registros
    let pointer = 0; // Puntero para las instrucciones

    while (pointer < instructions.length) {
        const [command, arg1, arg2] = instructions[pointer].split(" ");

        switch (command) {
            case "MOV": {
                registers[arg2] = isNaN(Number(arg1)) ? registers[arg1] || 0 : Number(arg1);
                pointer++;
                break;
            }

            case "INC": {
                registers[arg1] = (registers[arg1] || 0) + 1;
                pointer++;
                break;
            }

            case "DEC": {
                registers[arg1] = (registers[arg1] || 0) - 1;
                pointer++;
                break;
            }

            case "JMP": {
                const value = registers[arg1] || 0;
                pointer = value === 0 ? Number(arg2) : pointer + 1;
                break;
            }

            // default:
            //     throw new Error(`Unknown instruction: ${command}`);
        }
    }

    return registers["A"];
}