// Escribe una función que procese este array y devuelva un objeto que organice los juguetes de la siguiente manera:

// Las claves del objeto serán las categorías de juguetes.
// Los valores serán objetos que tienen como claves los nombres de los juguetes y como valores las cantidades totales de cada juguete en esa categoría.
// Si hay juguetes con el mismo nombre en la misma categoría, debes sumar sus cantidades.
// Si el array está vacío, la función debe devolver un objeto vacío {}.

/**
 * @param {{ name: string, quantity: number, category: string }[]} inventory
 * @returns {object} The organized inventory
 */
function organizeInventory(inventory) {
    if (inventory.length > 0) {
      const organizedInventory = {};
  
      for (const item of inventory) {
        const { name, quantity, category } = item;
  
        if (!organizedInventory[category]) {
          organizedInventory[category] = {};
        }
  
        if (!organizedInventory[category][name]) {
          organizedInventory[category][name] = 0;
        }
        organizedInventory[category][name] += quantity;
      }
      return organizedInventory;
    }
    return {}
  }

  const inventory = [
    { name: 'doll', quantity: 5, category: 'toys' },
    { name: 'car', quantity: 3, category: 'toys' },
    { name: 'ball', quantity: 2, category: 'sports' },
    { name: 'car', quantity: 2, category: 'toys' },
    { name: 'racket', quantity: 4, category: 'sports' }
  ]

  console.log(organizeInventory(inventory))