
export function calculatePrice(ornaments: string): number | undefined {
    let response = 0
    const price: Record<string, number> = {
        '*': 1,
        'o': 5,
        '^': 10,
        '#': 50,
        '@': 100,
    }

    for ( let i = 0; i < ornaments.length; i++ ) {
        if ( price[ornaments[i]] === undefined ) return undefined

        if ( price[ornaments[i+1]] > price[ornaments[i]] )
            response += (price[ornaments[i]]*-1)
        else response += price[ornaments[i]]
    }

    return response
}