// ¡Se acerca el día para repartir regalos! Necesitamos apilar los regalos que transportaremos en el trineo 🛷 y para eso los vamos a meter en cajas 📦.

// Los regalos se pueden meter en 4 cajas distintas, donde cada caja soporta 1, 2, 5, 10 de peso y se representan así:
//     _
// 1: |_|
//     _____
// 2: |_____|
//     _____
// 5: |     |
//    |_____|
//      _________
// 10: |         |
//     |_________|

// Representación en JavaScript:
// const boxRepresentations = {
//   1: [" _ ", "|_|"] ,
//   2: [" ___ ", "|___|"],
//   5: [" _____ ", "|     |", "|_____|"],
//   10: [" _________ ", "|         |", "|_________|"]
// }

// Tu misión es que al recibir el peso de los regalos, uses las mínimas cajas posibles y que, además, las apiles de menos peso (arriba) a más peso (abajo). Siempre alineadas a la izquierda.

// Además, ten en cuenta que al apilarlas, se reusa el borde inferior de la caja.

/**
 * @param {number} weight - Total weight of the gifts
 * @returns {string} - Stacked boxes represented as ASCII art
 */
function distributeWeight(weight) {
    const boxRepresentations = {
        1: [" _ ", "|_|"] ,
        2: [" ___ ", "|___|"],
        5: [" _____ ", "|     |", "|_____|"],
        10: [" _________ ", "|         |", "|_________|"]
    }
    let distribution = weight
    let result = ''
    let index = 0

    if (Math.floor(distribution/10) > 0) {
        result = boxRepresentations[10][1] + '\n' + boxRepresentations[10][2]
        distribution-=10
        index = 10
    }else{
        if (Math.floor(distribution/5) > 0) {
            result = boxRepresentations[5][1] + '\n' + boxRepresentations[5][2]
            distribution-=5
            index = 5
        }else{
            if (Math.floor(distribution/2) > 0) {
                result = boxRepresentations[2][1]
                distribution-=2
                index = 2
            }else{
                if (Math.floor(distribution/1) > 0) {
                    result = boxRepresentations[1][1]
                    distribution-=1
                    index = 1
                }else{
                    return result
                }
            }
        }
    }

    while (distribution > 0) {
        if (Math.floor(distribution/10) > 0) {
            result = boxRepresentations[10][1] + '\n' + boxRepresentations[10][2].padEnd(boxRepresentations[index][0].length - 1, '_') + '\n' + result
            distribution-=10
            index = 10
        }else{
            if (Math.floor(distribution/5) > 0) {
                result = boxRepresentations[5][1] + '\n' + boxRepresentations[5][2].padEnd(boxRepresentations[index][0].length - 1, '_') + '\n' + result
                distribution-=5
                index = 5
            }else{
                if (Math.floor(distribution/2) > 0) {
                    result = boxRepresentations[2][1].padEnd(boxRepresentations[index][0].length - 1, '_') + '\n' + result
                    distribution-=2
                    index = 2
                }else{
                    if (Math.floor(distribution/1) > 0) {
                        result = boxRepresentations[1][1].padEnd(boxRepresentations[index][0].length - 1, '_') + '\n' + result
                        distribution-=1
                        index = 1
                    }
                }
            }
        }
    }
    result = boxRepresentations[index][0] + '\n' + result

    return result;
}

console.log(distributeWeight(1))
// Devuelve:
//  _
// |_|

console.log(distributeWeight(2))
// Devuelve:
//  ___
// |___|

console.log(distributeWeight(3))
// Devuelve:
//  _
// |_|_
// |___|

console.log(distributeWeight(4))
// Devuelve:
//  ___
// |___|
// |___|

console.log(distributeWeight(5))
// Devuelve:
//  _____
// |     |
// |_____|

console.log(distributeWeight(6))
// Devuelve:
//  _
// |_|___
// |     |
// |_____|