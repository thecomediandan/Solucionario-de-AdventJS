// Los elfos 🧝🧝‍♂️ de Santa Claus han encontrado un montón de botas mágicas desordenadas en el taller. Cada bota se describe por dos valores:

// type indica si es una bota izquierda (I) o derecha (R).
// size indica el tamaño de la bota.
// Tu tarea es ayudar a los elfos a emparejar todas las botas del mismo tamaño que tengan izquierda y derecha. Para ello, debes devolver una lista con los pares disponibles después de emparejar las botas.

// ¡Ten en cuenta que puedes tener más de una zapatilla emparejada del mismo tamaño!

/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes 
 */
function organizeShoes(shoes) {
    let leftshoes = []
    let rightshoes = []
    let shoesSizes = []
    shoes.forEach((shoe) => {
        if (shoe.type === 'I') {
            leftshoes.push(shoe.size)
        }else{
            rightshoes.push(shoe.size)
        }
    })
    let sizes = Array.from(new Set(leftshoes))
    sizes.forEach((size) => {
        let leftQuantities = leftshoes.filter((shoeSize) => shoeSize == size).length
        let rightQuantities = rightshoes.filter((shoeSize) => shoeSize == size).length
        if (leftQuantities > 0 && rightQuantities > 0) {
            let shoesQuantities = Math.max(... [leftQuantities, rightQuantities]) - Math.abs(leftQuantities - rightQuantities)
            for (let index = 0; index < shoesQuantities; index++) {
                shoesSizes.push(size)
            }
        }
    })
    return shoesSizes
}

const shoes = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 42 }
  ]
  

  console.log(organizeShoes(shoes))
  // [38, 42]
  
  const shoes2 = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'I', size: 38 },
    { type: 'I', size: 38 },
    { type: 'R', size: 38 }
  ]

  console.log(organizeShoes(shoes2))
  // [38, 38]
  
  const shoes3 = [
    { type: 'I', size: 38 },
    { type: 'R', size: 36 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 43 }
  ]
  
  console.log(organizeShoes(shoes3))
  // []