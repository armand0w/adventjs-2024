type Inventory = Array<{ name: string, quantity: number, category: string }>

export function organizeInventory(inventory: Inventory): object {
    const organized: Record<string, Record<string, number>> = {};

    for (const item of inventory) {
        // Si la categoría no existe en el resultado, inicialízala
        if (!organized[item.category]) {
            organized[item.category] = {};
        }

        // Si el juguete ya existe en la categoría, suma su cantidad
        if (organized[item.category][item.name]) {
            organized[item.category][item.name] += item.quantity;
        } else {
            // Si no existe, inicializa con la cantidad actual
            organized[item.category][item.name] = item.quantity;
        }
    }

    return organized;
}