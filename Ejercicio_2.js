// Reglas:

// Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
// Cada nombre debe estar en una línea, alineado a la izquierda.
// El marco está construido con * y tiene un borde de una línea de ancho.
// La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.

/**
 * @param {string[]} names - Array of names to frame
 * @returns {string} The framed names
 */
function createFrame(names) {
    const maxLength = Math.max(...names.map(name => name.length));
    const frameWidth = maxLength;
    const frame = '*'.repeat(frameWidth + 4);
  
    const framedNames = names.map(name => "* " + name.padEnd(maxLength, ' ') + " *");
  
    return `${frame}\n${framedNames.join('\n')}\n${frame}`;
  }

  console.log(createFrame(["Lila", "Benito", "Daniel Danish", "Bender", "Mariachi Loco XD"]));