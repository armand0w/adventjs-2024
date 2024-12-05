
export function createFrame(names: string[]): string {
    let max = Math.max(...names.map(nombre => nombre.length));
    let marco = '*'.repeat(max + 4)
    let framed = names.map(n =>`* ${n.padEnd(max, ' ')} *` ).join('\n')

    return `${marco}\n${framed}\n${marco}`
}

