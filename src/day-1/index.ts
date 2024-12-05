
export function prepareGifts(gifts: number[]): number[] {
    let arr = [...new Set<number>(gifts)]
    return arr.sort((a, b) => a - b );
}