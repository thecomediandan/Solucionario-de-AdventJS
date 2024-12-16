// ¡Es hora de poner el árbol de Navidad en casa! 🎄 Pero este año queremos que sea especial. Vamos a crear una función que recibe la altura del árbol (un entero positivo entre 1 y 100) y un carácter especial para decorarlo.

// La función debe devolver un string que represente el árbol de Navidad, construido de la siguiente manera:

// El árbol está compuesto de triángulos de caracteres especiales.
// Los espacios en blanco a los lados del árbol se representan con guiones bajos _.
// Todos los árboles tienen un tronco de dos líneas, representado por el carácter #.
// El árbol siempre debe tener la misma longitud por cada lado.
// Debes asegurarte de que el árbol tenga la forma correcta usando saltos de línea \n para cada línea.

/**
 * @param {number} height - Height of the tree
 * @param {string} ornament - Symbol to draw
 * @returns {string} Drawn tree
 */
function createXmasTree(height, ornament) {
    const maxWidth = height * 2 - 1
    let width = 1
    let tree = ''
    for (let index = 1; index <= height; index++) {
        tree+=`${ornament.repeat(width).padStart(maxWidth/2 + index, '_').padEnd(maxWidth, '_')}\n`
        width+=2
    }
    tree+=`${'#'.padStart(maxWidth/2 + 1, '_').padEnd(maxWidth, '_').concat('\n')}`
    tree+=`${'#'.padStart(maxWidth/2 + 1, '_').padEnd(maxWidth, '_')}`
    return tree
  }

  const tree = createXmasTree(5, '*')
console.log(tree)