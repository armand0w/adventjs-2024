
export function inBox(box: string[]): boolean {
    // if ( box.length === 0 ) return false
    let has = box.join().indexOf('*') >= 0
    if ( !has ) return false

    box.splice(0, 1)
    box.splice(box.length - 1, 1)
    box = box.map(b => {
        if ( b.indexOf('*') === 0 )
            return b.replace(/\*#/g, "# ")

        if ( b.indexOf('*') === b.length - 1 )
            return b.replace(/#\*/g, " #")

        else return b
    })

    return box.join().indexOf('*') >= 0
}