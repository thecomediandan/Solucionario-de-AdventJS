// Santa Claus 🎅 está revisando una lista de juguetes únicos que podría incluir en su bolsa mágica de regalos. Quiere explorar todas las combinaciones posibles de juguetes. Quiere ver todas las combinaciones que realmente contengan al menos un juguete.

// Tu tarea es escribir una función que, dado un array de juguetes, devuelva todas las combinaciones posibles.

// Importante: Debes devolverlo en el orden que aparecen los juguetes y de combinaciones de 1 a n juguetes.

/**
 * @param {string[]} gifts - List of unique gifts.
 * @returns {string[][]} - All possible combinations of gifts, sorted by length.
 */
function generateGiftSets(gifts) {
    // Code here
    return []
}

generateGiftSets(['car', 'doll', 'puzzle'])
// [
//   ['car'],
//   ['doll'],
//   ['puzzle'],
//   ['car', 'doll'],
//   ['car', 'puzzle'],
//   ['doll', 'puzzle'],
//   ['car', 'doll', 'puzzle']
// ]

generateGiftSets(['ball'])
// [
//   ['ball']
// ]

generateGiftSets(['game', 'pc'])
// [
//   ['game'],
//   ['pc'],
//   ['game', 'pc']
// ]