
export function createXmasTree(height: number, ornament: string): string {
    let count = 1;
    let aux = Array.from({ length: height }, (_, i) => i).toReversed()
    let tree = aux.map(t => {
        let row = `${'_'.repeat(t)}${ornament.repeat(count)}${'_'.repeat(t)}`
        count += 2
        return row
    })

    tree.push(`${'_'.repeat(height-1)}#${'_'.repeat(height-1)}`)
    tree.push(`${'_'.repeat(height-1)}#${'_'.repeat(height-1)}`)

    return tree.join('\n')
}