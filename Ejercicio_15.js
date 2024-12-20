// Al Polo Norte ha llegado ChatGPT y el elfo Sam Elfman está trabajando en una aplicación de administración de regalos y niños.

// Para mejorar la presentación, quiere crear una función drawTable que reciba un array de objetos y lo convierta en una tabla de texto.

// La tabla dibujada debe representar los datos del objeto de la siguiente manera:

// Tiene una cabecera con el nombre de la columna.
// El nombre de la columna pone la primera letra en mayúscula.
// Cada fila debe contener los valores de los objetos en el orden correspondiente.
// Cada valor debe estar alineado a la izquierda.
// Los campos dejan siempre un espacio a la izquierda.
// Los campos dejan a la derecha el espacio necesario para alinear la caja.

/**
  * @param {Array<Object>} data
  * @returns {string}
  */
function drawTable(data) {
    let table = ''
    if (data.length > 0) {
        if (Object.keys(data[0]).length > 0) {            
            const columnHeaders = Object.keys(data[0])
            let maxLeft = columnHeaders[0].length
            let maxRight = columnHeaders[1].length
        
            data.forEach((row) => {
                if (row[columnHeaders[0]] && (row[columnHeaders[0]].toString().length > maxLeft)) {
                    maxLeft = row[columnHeaders[0]].toString().length
                }
                if (row[columnHeaders[1]] && (row[columnHeaders[1]].toString().length > maxRight)) {
                    maxRight = row[columnHeaders[1]].toString().length
                }
            })
        
            table += '+-' + '-'.repeat(maxLeft) + '-+-' + '-'.repeat(maxRight) + '-+\n'
            table += '| ' + columnHeaders[0].charAt(0).toUpperCase().concat(columnHeaders[0].slice(1)).padEnd(maxLeft, ' ')
             + ' | ' + columnHeaders[1].charAt(0).toUpperCase().concat(columnHeaders[1].slice(1)).padEnd(maxRight, ' ') + ' |\n'
            table += '+-' + '-'.repeat(maxLeft) + '-+-' + '-'.repeat(maxRight) + '-+\n'
            data.forEach((row) => {
                if (Object.keys(row).length > 0) {                    
                    if (row[columnHeaders[0]] != undefined) {
                        table += '| ' + row[columnHeaders[0]].toString().padEnd(maxLeft, ' ') + ' | '
                    }else {
                        table += '| ' + ' '.padEnd(maxLeft, ' ') + ' | '
                    }
    
                    if (row[columnHeaders[1]] != undefined) {
                        table += row[columnHeaders[1]].toString().padEnd(maxRight, ' ') + ' |\n'
                    }else {
                        table += ' '.padEnd(maxRight, ' ') + ' |\n'
                    }
                }
            })
            table += '+-' + '-'.repeat(maxLeft) + '-+-' + '-'.repeat(maxRight) + '-+'
        }  
    }

    return table
}

/**
  * @param {Array<Object>} data
  * @returns {string}
  */
function drawTable2(data) {
    let table = ''
    if (data.length > 0) {
        if (Object.keys(data[0]).length > 0) {            
            const columnHeaders = Object.keys(data[0])
            let max = columnHeaders.map((header) => header.length)
            
            // Buscamos los máximos de cada columna
            data.forEach((row) => {
                for (let indexMax = 0; indexMax < columnHeaders.length; indexMax++) {                    
                    if (row[columnHeaders[indexMax]] && (row[columnHeaders[indexMax]].toString().length > max[indexMax])) {
                        max[indexMax] = row[columnHeaders[indexMax]].toString().length
                    }
                }
            })
            //console.log(max)
            // Creamos la cabecera de la tabla
            let lineUp = '+-'
            let lineMiddle = '| '
            for (let indexMax = 0; indexMax < columnHeaders.length; indexMax++) {
                if (indexMax == columnHeaders.length - 1) {
                    lineUp += '-'.repeat(max[indexMax]) + '-+'
                    lineMiddle += columnHeaders[indexMax].charAt(0).toUpperCase().concat(columnHeaders[indexMax].slice(1)).padEnd(max[indexMax], ' ') + ' |'
                }else {
                    lineUp += '-'.repeat(max[indexMax]) + '-+-'
                    lineMiddle += columnHeaders[indexMax].charAt(0).toUpperCase().concat(columnHeaders[indexMax].slice(1)).padEnd(max[indexMax], ' ') + ' | '
                }
            }
            table += lineUp + '\n' + lineMiddle + '\n' + lineUp + '\n'

            // Creamos los datos de la tabla
            for (let indexRow = 0; indexRow < data.length; indexRow++) {
                if (Object.keys(data[indexRow]).length > 0) {
                    table += '| '                  
                    for (let indexHeader = 0; indexHeader < columnHeaders.length; indexHeader++) {
                        if (indexHeader == columnHeaders.length - 1) {
                            if (data[indexRow][columnHeaders[indexHeader]] != undefined) {
                                table += data[indexRow][columnHeaders[indexHeader]].toString().padEnd(max[indexHeader], ' ') + ' |\n'
                            }else {
                                table += ' '.padEnd(max[indexHeader], ' ') + ' |\n'
                            }
                        }else {
                            if (data[indexRow][columnHeaders[indexHeader]] != undefined) {
                                table += data[indexRow][columnHeaders[indexHeader]].toString().padEnd(max[indexHeader], ' ') + ' | '
                            }else {
                                table += ' '.padEnd(max[indexHeader], ' ') + ' | '
                            }
                        }                      
                    }
                }
            }
            table += lineUp
        }  
    }
    return table
}

console.log(drawTable2([
    { name: 'Alice', city: 'London' },
    { name: 'Bob', city: 'Paris' },
    { name: 'Charlie', city: 'New York' }
  ]))
  // +---------+-----------+
  // | Name    | City      |
  // +---------+-----------+
  // | Alice   | London    |
  // | Bob     | Paris     |
  // | Charlie | New York  |
  // +---------+-----------+
  
  console.log(drawTable2([
    { gift: 'Doll', quantity: 10 },
    { gift: 'Book'},
    { gift: 'Music CD', quantity: 1 }
  ]))
  // +----------+----------+
  // | Gift     | Quantity |
  // +----------+----------+
  // | Doll     | 10       |
  // | Book     | 5        |
  // | Music CD | 1        |
  // +----------+----------+

  console.log(drawTable([]))
  console.log(drawTable([{}]))
  console.log(drawTable2([
    { gift: 'Doll', quantity: 10, genre: 'female' },
    {},
    { gift: 'Music CD', quantity: false, genre: 'male' }
]))