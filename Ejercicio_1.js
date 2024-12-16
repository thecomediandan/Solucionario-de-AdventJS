// Tu tarea es escribir una función que reciba una lista de números enteros (que pueden incluir duplicados) y devuelva una nueva lista sin duplicados, ordenada en orden ascendente.

function prepareGifts(gifts) {
    const uniqueGifts = new Set(gifts);
    return Array.from(uniqueGifts).sort((a, b) => a - b);
}
  
const gifts = [34,45,32,10,5,7,34,10]
console.log(prepareGifts(gifts))