// Santa Claus 🎅 está revisando una lista de juguetes únicos que podría incluir en su bolsa mágica de regalos. Quiere explorar todas las combinaciones posibles de juguetes. Quiere ver todas las combinaciones que realmente contengan al menos un juguete.

// Tu tarea es escribir una función que, dado un array de juguetes, devuelva todas las combinaciones posibles.

// Importante: Debes devolverlo en el orden que aparecen los juguetes y de combinaciones de 1 a n juguetes.

/**
 * @param {string[]} gifts - List of unique gifts.
 * @returns {string[][]} - All possible combinations of gifts, sorted by length.
 */
function generateGiftSets(gifts) {
    let result = []
    let space = 0
        for (let index = 1; index <= gifts.length; index++) {
            let gift = []
            for (let indexArray = index; indexArray <= Math.trunc(gifts.length / index); indexArray++) {
                gift.push(gifts[indexArray])
                if (space == 0) {
                    for (let indexCombined = 0; (indexCombined < gifts.length); indexCombined++) {
                        result.push([...[gifts[indexCombined]]])
                }
                }else {
                    for (let indexCombined = gift.length; (indexCombined < gifts.length); indexCombined++) {
                        result.push([...gift, gifts[indexCombined]])
                }
                }
            }
    
            space++
        } 

    console.log(result)
    return result
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

// generateGiftSets(['ball'])
// [
//   ['ball']
// ]

// generateGiftSets(['game', 'pc'])
// [
//   ['game'],
//   ['pc'],
//   ['game', 'pc']
// ]