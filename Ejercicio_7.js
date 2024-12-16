// ¡El grinch 👹 ha pasado por el taller de Santa Claus! Y menudo desastre ha montado. Ha cambiado el orden de algunos paquetes, por lo que los envíos no se pueden realizar.

// Por suerte, el elfo Pheralb ha detectado el patrón que ha seguido el grinch para desordenarlos. Nos ha escrito las reglas que debemos seguir para reordenar los paquetes. Las instrucciones que siguen son:

// Recibirás un string que contiene letras y paréntesis.
// Cada vez que encuentres un par de paréntesis, debes voltear el contenido dentro de ellos.
// Si hay paréntesis anidados, resuelve primero los más internos.
// Devuelve el string resultante con los paréntesis eliminados, pero con el contenido volteado correctamente.
// Nos ha dejado algunos ejemplos:

/** @param {string} packages with parentheses
 *  @returns {string} Fixed and sorted packages
 */
function fixPackages(packages) {
    let result = packages
    while (result.includes('(')) {
        const indexLeft = result.lastIndexOf('(')
        const indexRight = result.indexOf(')')

        const resLeft = result.substring(0, indexLeft)
        const resRight = result.substring(indexRight + 1, result.length)
        let innerRes = result.substring(indexLeft + 1, indexRight)
        
        let innerResInvert = innerRes.split('').reverse().join('')
        result = resLeft + innerResInvert + resRight
    }
    return result
}

/** @param {string} packages with parentheses
 *  @returns {string} Fixed and sorted packages
 */
function fixPackages2(packages) {
    let result = packages.split(/[\(\)]/)
    while (result.length > 1) {
        let innerRes = result[Math.round((result.length - 1)/2)]
        let innerResInvert = innerRes.split('').reverse().join('')
        let innerIndex = Math.round((result.length - 1)/2) - 1
        let resultParcial = result[innerIndex] + innerResInvert + result[Math.round((result.length - 1)/2) + 1]
        result.splice(Math.round((result.length - 1)/2), 2)
        result[innerIndex] = resultParcial
    }
    return result.join('')
}

function fixPackagesChatGPT(packages) {
    let result = packages;
    while (result.includes('(')) {
    // Encuentra el paréntesis más interno
    const lastOpen = result.lastIndexOf('(');
    const firstClose = result.indexOf(')', lastOpen);
    // Extrae el contenido dentro de los paréntesis
    const before = result.substring(0, lastOpen);
    const middle = result.substring(lastOpen + 1, firstClose).split('').reverse().join('');
    const after = result.substring(firstClose + 1);
    // Reconstruye la cadena con el contenido volteado
    result = before + middle + after;
    }
    return result;
}

console.log(fixPackages2('a(cb)de'))
// ➞ "abcde"
// Volteamos "cb" dentro de los paréntesis

console.log(fixPackages2('a(bc(def)g)h'))
// ➞ "agdefcbh"
// 1º volteamos "def" → "fed", luego volteamos "bcfedg" → "gdefcb"

console.log(fixPackages2('abc(def(gh)i)jk'))
// ➞ "abcighfedjk"
// 1º volteamos "gh" → "hg", luego "defhgi" → "ighfed"

console.log(fixPackages2('a(b(c))e'))
// ➞ "acbe"
// 1º volteamos "c" → "c", luego "bc" → "cb"