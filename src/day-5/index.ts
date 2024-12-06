export type Shoe = {
    type: 'I' | 'R'
    size: number
}

export function organizeShoes(shoes: Shoe[]): number[] {
    const sizeCount: Record<number, { I: number; R: number }> = {};
    const pairs: number[] = [];

    // Contar botas por tipo y tamaño
    for ( const shoe of shoes ) {
        if ( !sizeCount[shoe.size] ) {
            sizeCount[shoe.size] = {I: 0, R: 0};
        }
        sizeCount[shoe.size][shoe.type]++;
    }

    // Encontrar pares para cada tamaño
    for ( const size in sizeCount ) {
        const count = sizeCount[size];
        const pairCount = Math.min(count.I, count.R);
        for ( let i = 0; i < pairCount; i++ ) {
            pairs.push(Number(size));
        }
    }

    return pairs;
}