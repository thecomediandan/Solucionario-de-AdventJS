// Ya hemos empaquetado cientos de regalos 🎁… pero a un elfo se le ha olvidado revisar si el regalo, representado por un asterisco *, está dentro de la caja.

// La caja tiene un regalo (*) y cuenta como dentro de la caja si:

// Está rodeada por # en los bordes de la caja.
// El * no está en los bordes de la caja.
// Ten en cuenta entonces que el * puede estar dentro, fuera o incluso no estar. Y debemos devolver true si el * está dentro de la caja y false en caso contrario.

/** @param {string[]} box
 *  @returns {boolean} True if the gift is inside the box
 */
function inBox(box) {
    let exist = false
    for (let index = 1; index <= box.length - 2; index++) {
        const line = box[index]
        const boxInside = line.substring(1, line.length - 1)
        if (boxInside.includes('*')) {
            exist = true
        }
    }
    return exist
}

console.log(inBox([
    "###",
    "#*#",
    "###"
  ])) // ➞ true
  
  console.log(inBox([
    "####",
    "#* #",
    "#  #",
    "####"
  ])) // ➞ true
  
  console.log(inBox([
    "#####",
    "#   #",
    "#  #*",
    "#####"
  ])) // ➞ false
  
  console.log(inBox([
    "#####",
    "#   #",
    "#   #",
    "#   #",
    "#####"
  ])) // ➞ false