// Los elfos del Polo Norte han creado un robot 🤖 especial que ayuda a Papá Noel a distribuir regalos dentro de un gran almacén. El robot se mueve en un plano 2D y partimos desde el origen (0, 0).

// Queremos saber si, tras ejecutar una serie de movimientos, el robot vuelve a estar justo donde empezó.

// Las órdenes básicas del robot son:

// L: Mover hacia la izquierda
// R: Mover hacia la derecha
// U: Mover hacia arriba
// D: Mover hacia abajo
// Pero también tiene ciertos modificadores para los movimientos:

// *: El movimiento se realiza con el doble de intensidad (ej: *R significa RR)
// !: El siguiente movimiento se invierte (ej: R!L se considera como RR)
// ?: El siguiente movimiento se hace sólo si no se ha hecho antes (ej: R?R significa R)
// Nota: Cuando el movimiento se invierte con ! se contabiliza el movimiento invertido y no el original. Por ejemplo, !U?U invierte el movimiento de U, por lo que contabiliza que se hizo el movimiento D pero no el U. Así !U?U se traduce como D?U y, por lo tanto, se haría el movimiento U final.

// Debes devolver:

// true: si el robot vuelve a estar justo donde empezó
// [x, y]: si el robot no vuelve a estar justo donde empezó, devolver la posición donde se detuvo

/** @param {string} moves
 * @returns {true|[number, number]} Return true if robot returns or position
 */
function isRobotBack(moves) {
    let listMoves = moves
    // let movesDefinitive = ''
    let cartesian = [0, 0]
    for (let index = 0; index < listMoves.length; index++) {
        let op = '', left = '', right = ''
        switch (listMoves.charAt(index)) {
            case '*':
                op = listMoves.charAt(index + 1).repeat(2)
                left = listMoves.substring(0, index)
                right = listMoves.substring(index + 2)
                listMoves = left + op + right
                index--
                break;
            
            case '!':
                if (listMoves.charAt(index + 1) == 'L') {
                    op = 'R'
                }
                 if (listMoves.charAt(index + 1) == 'R') {
                    op = 'L'
                }
                if (listMoves.charAt(index + 1) == 'U') {
                    op = 'D'
                }
                if (listMoves.charAt(index + 1) == 'D'){
                    op = 'U'
                }
                left = listMoves.substring(0, index)
                right = listMoves.substring(index + 2)
                listMoves = left + op + right
                index--
                break;

            case '?':
                if (listMoves.substring(0, index).includes(listMoves.charAt(index + 1))) {
                    left = listMoves.substring(0, index)
                    right = listMoves.substring(index + 2)
                    listMoves = left + right
                }else {
                    left = listMoves.substring(0, index)
                    right = listMoves.substring(index + 2)
                    listMoves = left + listMoves.charAt(index + 1) + right
                }
                index--
                break;

            default:
                // movesDefinitive += listMoves.charAt(index)
                if (listMoves.charAt(index) == 'L') {
                    cartesian[0] --
                }
                 if (listMoves.charAt(index) == 'R') {
                    cartesian[0] ++
                }
                if (listMoves.charAt(index) == 'U') {
                    cartesian[1] ++
                }
                if (listMoves.charAt(index) == 'D'){
                    cartesian[1] --
                }
                break;
        }
    }
    //console.log(movesDefinitive)
    if (cartesian[0] == 0 && cartesian[1] == 0) {
        return true
    }else {
        return cartesian
    }
}

console.log(isRobotBack('R')     )// [1, 0]
console.log(isRobotBack('RL')    )// true
console.log(isRobotBack('RLUD')  )// true
console.log(isRobotBack('*RU')   )// [2, 1]
console.log(isRobotBack('R*U')   )// [1, 2]
console.log(isRobotBack('LLL!R') )// [-4, 0]
console.log(isRobotBack('R?R')   )// [1, 0]
console.log(isRobotBack('U?D')   )// true
console.log(isRobotBack('R!L')   )// [2,0]
console.log(isRobotBack('U!D')   )// [0,2]
console.log(isRobotBack('R?L')   )// true
console.log(isRobotBack('U?U')   )// [0,1]
console.log(isRobotBack('*U?U')  )// [0,2]
console.log(isRobotBack('U?D?U') )// true

// Ejemplos paso a paso:
console.log(isRobotBack('R!U?U') )// [1,0]
// 'R'  -> se mueve a la derecha 
// '!U' -> se invierte y se convierte en 'D'
// '?U' -> se mueve arriba, porque no se ha hecho el movimiento 'U'

console.log(isRobotBack('UU!U?D')) // [0,1]
// 'U'  -> se mueve arriba
// 'U'  -> se mueve arriba
// '!U' -> se invierte y se convierte en 'D'
// '?D' -> no se mueve, ya que ya se hconsole.logizo el movimiento 'D(')