// Santa Claus 🎅 está revisando una lista de juguetes únicos que podría incluir en su bolsa mágica de regalos. Quiere explorar todas las combinaciones posibles de juguetes. Quiere ver todas las combinaciones que realmente contengan al menos un juguete.

// Tu tarea es escribir una función que, dado un array de juguetes, devuelva todas las combinaciones posibles.

// Importante: Debes devolverlo en el orden que aparecen los juguetes y de combinaciones de 1 a n juguetes.

/**
 * @param {string[]} gifts - List of unique gifts.
 * @returns {string[][]} - All possible combinations of gifts, sorted by length.
 */
// function generateGiftSets(gifts) {
//     let flag = true
//     let result = []
//         for (let index = 1; index <= gifts.length; index++) {
//             let gift = []
//             let indexStart = -1
//             let indexEnd = 0

//             for (let indexArray = 0; indexArray < combinacionSinRepeticion(gifts.length, index); indexArray++) {
//                 indexStart ++
//                 indexEnd = indexStart + index - 1
//                 gift = gifts.slice(indexStart, indexEnd)
//                 if (flag) {
//                     flag = false
//                     for (let indexCombined = 0; (indexCombined < gifts.length); indexCombined++) {
//                         result.push([...[gifts[indexCombined]]])
//                     }
//                     break
//                 }else {
//                     for (let indexCombined = indexEnd; (indexCombined < gifts.length); indexCombined++) {
//                         result.push([...gift, gifts[indexCombined]])
//                     }
//                 }
//             }
//         } 

//     console.log(result)
//     return result
// }

// function combinacionSinRepeticion(n, r) {
//     return factorial(n) / (factorial(r) * factorial(n - r));
// }

// function factorial(n) { 
//     if (n === 0 || n === 1) { 
//         return 1; 
//     } else { 
//         return n * factorial(n - 1); 
//     } 
// }

/**
 * @param {string[]} gifts - List of unique gifts.
 * @returns {string[][]} - All possible combinations of gifts, sorted by length.
 */
function generateGiftSets(gifts) {
    let flag = true
    let result = []
    const factorial = (n) => {
        if (n === 0 || n === 1) {
            return 1
        } else {
            return n * factorial(n - 1)
        }
    }
    const combinacionSinRepeticion = (n, r) => {
        return factorial(n) / (factorial(r) * factorial(n - r));
    }

        for (let index = 1; index <= gifts.length; index++) {
            let gift = []
            let indexStart = -1
            let indexEnd = 0

            // Operación de combinatoria


            for (let indexArray = 0; indexArray < combinacionSinRepeticion(gifts.length, index); indexArray++) {
                indexStart ++
                indexEnd = indexStart + index - 1
                gift = gifts.slice(indexStart, indexEnd)
                if (flag) {
                    flag = false
                    for (let indexCombined = 0; (indexCombined < gifts.length); indexCombined++) {
                        result.push([...[gifts[indexCombined]]])
                    }
                    break
                }else {
                    for (let indexCombined = indexEnd; (indexCombined < gifts.length); indexCombined++) {
                        result.push([...gift, gifts[indexCombined]])
                    }
                }
            }
        } 

    console.log(result)
    return result
}

/**
 * @param {string[]} gifts - List of unique gifts.
 * @returns {string[][]} - All possible combinations of gifts, sorted by length.
 */
function generateGiftSets2(gifts) {
    let result = []

    for (let indexLenght = 1; indexLenght <= gifts.length; indexLenght++) {
        // Seteando punteros
        let giftPointer = []

        for (let indexGiftSelect = 0; indexGiftSelect < indexLenght; indexGiftSelect++) {
            giftPointer.push(indexGiftSelect)
        }
        // La primera combinación
        let giftSelected = []
        for (let indexPointer = 0; indexPointer < giftPointer.length; indexPointer++) {
            giftSelected.push(gifts[giftPointer[indexPointer]])
        }
        result.push(giftSelected)

        // Generando combinaciones
        // let limit = 0
        // for (let indexCombined = giftPointer.length - 1; (indexCombined >= 0 && giftPointer.length < gifts.length); indexCombined--) {
        //     for (let indexFinal = indexCombined + 1; indexFinal < (gifts.length - limit); indexFinal++) {
        //         giftPointer[indexCombined] = indexFinal
    
        //         let giftSelected = []
        //         for (let indexPointer = 0; indexPointer < giftPointer.length; indexPointer++) {
        //             giftSelected.push(gifts[giftPointer[indexPointer]])
        //         }
        //         result.push(giftSelected)          
        //     }
        //     limit++
        // }
        let limit = 0
        let indexCombined = giftPointer.length - 1
        while (limit < giftPointer.length) {
            for (let indexFinal = giftPointer[indexCombined] + 1; indexFinal < (gifts.length - limit); indexFinal++) {
                
                giftPointer[indexCombined] = indexFinal
                let giftSelected = []
                for (let indexPointer = 0; indexPointer < giftPointer.length; indexPointer++) {
                    giftSelected.push(gifts[giftPointer[indexPointer]])
                }
                result.push(giftSelected)          
            }

            if (giftPointer[indexCombined] - giftPointer[indexCombined - 1] > 1) {
                giftPointer[indexCombined - 1] ++

                // todo este bloque debe de resetar los punteros desde el indexCombined hasta el final sumando 1
                let finalElement = giftPointer[indexCombined - 1]
                giftPointer[indexCombined] = finalElement + 1

                let giftSelected = []
                for (let indexPointer = 0; indexPointer < giftPointer.length; indexPointer++) {
                    giftSelected.push(gifts[giftPointer[indexPointer]])
                }
                result.push(giftSelected)   
            }else {
                indexCombined--
                limit++
            }
        }
    }
    console.log(result)
    return result
}

// generateGiftSets(['car', 'doll', 'puzzle'])
// generateGiftSets2(['car', 'doll', 'puzzle'])
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

// generateGiftSets(['apple', 'banana', 'cherry', 'date'])
generateGiftSets2(['apple', 'banana', 'cherry', 'date'])
// [
//     ["apple"],
//     ["banana"],
//     ["cherry"],
//     ["date"],
//     ["apple","banana"],
//     ["apple","cherry"],
//     ["apple","date"],
//     ["banana","cherry"],
//     ["banana","date"],
//     ["cherry","date"],
//     ["apple","banana","cherry"],
//     ["apple","banana","date"],
//     ["apple","cherry","date"],
//     ["banana","cherry","date"],
//     ["apple","banana","cherry","date"]
//   ]

generateGiftSets2(['pen', 'notebook', 'eraser', 'pencil', 'marker'])
// [
//     ["pen"],
//     ["notebook"],
//     ["eraser"],
//     ["pencil"],
//     ["marker"],
//     ["pen","notebook"],
//     ["pen","eraser"],
//     ["pen","pencil"],
//     ["pen","marker"],
//     ["notebook","eraser"],
//     ["notebook","pencil"],
//     ["notebook","marker"],
//     ["eraser","pencil"],
//     ["eraser","marker"],
//     ["pencil","marker"],
//     ["pen","notebook","eraser"],
//     ["pen","notebook","pencil"],
//     ["pen","notebook","marker"],
//     ["pen","eraser","pencil"],
//     ["pen","eraser","marker"],
//     ["pen","pencil","marker"],
//     ["notebook","eraser","pencil"],
//     ["notebook","eraser","marker"],
//     ["notebook","pencil","marker"],
//     ["eraser","pencil","marker"],
//     ["pen","notebook","eraser","pencil"],
//     ["pen","notebook","eraser","marker"],
//     ["pen","notebook","pencil","marker"],
//     ["pen","eraser","pencil","marker"],
//     ["notebook","eraser","pencil","marker"],
//     ["pen","notebook","eraser","pencil","marker"]
// ]