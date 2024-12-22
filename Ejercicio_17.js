// El Grinch ha estado haciendo de las suyas en el Polo Norte y ha sembrado bombas de carbón explosivo 💣 en la fábrica de juguetes de los duendes. Quiere que todos los juguetes queden inutilizados y por eso ha dejado una cuadrícula donde algunas celdas tienen carbón explosivo (true) y otras están vacías (false).

// Los duendes necesitan tu ayuda para mapear las zonas peligrosas. Cada celda vacía debe mostrar un número que indique cuántas bombas de carbón explosivo hay en las posiciones adyacentes, incluidas las diagonales.

/**
 * @param {boolean[][]} grid
 * @returns {number[][]}
 */
function detectBombs(grid) {
    let mapped = []
    for (let row = 0; row < grid.length; row++) {
        let mapRow = []
        for (let column = 0; column < grid[row].length; column++) {
            let bombsNumber = 0
            if (column - 1 >= 0) {                
                if (grid[row][column - 1] === true) {
                    bombsNumber++
                }
            }
            if ((row - 1 >= 0) && (column - 1 >= 0)) {                
                if (grid[row - 1][column - 1] === true) {
                    bombsNumber++
                }
            }
            if (row - 1 >= 0) {                
                if (grid[row - 1][column] === true) {
                    bombsNumber++
                }
            }
            if ((row - 1 >= 0) && (column + 1 < grid[row].length)) {
                if (grid[row - 1][column + 1] === true) {
                    bombsNumber++
                }
            }
            if (column + 1 < grid[row].length) {                
                if (grid[row][column + 1] === true) {
                    bombsNumber++
                }
            }
            if ((row + 1 < grid.length) && (column + 1 < grid[row].length)) {                
                if (grid[row + 1][column + 1] === true) {
                    bombsNumber++
                }
            }
            if (row + 1 < grid.length) {                
                if (grid[row + 1][column] === true) {
                    bombsNumber++
                }
            }
            if ((row + 1 < grid.length) && (column - 1 >= 0)) {                
                if (grid[row + 1][column - 1] === true) {
                    bombsNumber++
                }
            }
            mapRow.push(bombsNumber)
        }
        mapped.push(mapRow)
    }
    return mapped
}

console.log(detectBombs([
    [true, false, false],
    [false, true, false],
    [false, false, false]
  ]))
  // [
  //   [1, 2, 1],
  //   [2, 1, 1],
  //   [1, 1, 1]
  // ]
  
console.log(detectBombs([
    [true, false],
    [false, false]
  ]))
  // [
  //   [0, 1],
  //   [1, 1]
  // ]
  
console.log(detectBombs([
    [true, true],
    [false, false],
    [true, true]
  ]))
  
  // [
  //   [1, 1],
  //   [4, 4],
  //   [1, 1]
  // ]