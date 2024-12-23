// Santa Claus tiene una agenda mágica 📇 donde guarda las direcciones de los niños para entregar los regalos. El problema: la información de la agenda está mezclada y malformateada. Las líneas contienen un número de teléfono mágico, el nombre de un niño y su dirección, pero todo está rodeado de caracteres extraños.

// Santa necesita tu ayuda para encontrar información específica de la agenda. Escribe una función que, dado el contenido de la agenda y un número de teléfono, devuelva el nombre del niño y su dirección.

// Ten en cuenta que en la agenda:

// Los números de teléfono están formateados como +X-YYY-YYY-YYY (donde X es uno o dos dígitos, e Y es un dígito).
// El nombre de cada niño está siempre entre < y >
// La idea es que escribas una funcióna que, pasándole el teléfono completo o una parte, devuelva el nombre y dirección del niño. Si no encuentra nada o hay más de un resultado, debes devolver null.

/**
 * @param {string} agenda
 * @param {string} phone
 * @returns {{ name: string, address: string } | null}
 */
function findInAgenda(agenda, phone) {
    // const phoneRegex = new RegExp(`\\+\\d{1,2}-\\d{3}-\\d{3}-\\d{3}`, 'g')
    const phoneRegex = /\+\d{1,2}-\d{3}-\d{3}-\d{3}/
    const nameRegex = /<(.+)>/
    const lines = agenda.split('\n')
    let results = 0
    for (const line of lines) {
        if (line.includes(phone)) {
            results++
        }
        if (results > 1) {
            return null
        }
    }
    for (const line of lines) {
        if (line.includes(phone)) {
            const name = line.match(nameRegex)
            let dirtyAddress = line.replace(phoneRegex, '').replace(nameRegex, '')
            let address = ''
            while (dirtyAddress.startsWith(' ') || dirtyAddress.endsWith(' ')) {
                if (dirtyAddress.startsWith(' ')) {
                    dirtyAddress = dirtyAddress.substring(1)
                }
                if (dirtyAddress.endsWith(' ')) {
                    dirtyAddress = dirtyAddress.substring(0, dirtyAddress.length - 1)
                }
            }
            if (name) {
                address = dirtyAddress
                return { name: name[1], address: address }
            }
        }
    }
    return null
}

const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`

console.log(findInAgenda(agenda, '34-600-123-456'))
// { name: "Juan Perez", address: "Calle Gran Via 12" }

console.log(findInAgenda(agenda, '600-987'))
// { name: "Maria Gomez", address: "Plaza Mayor 45 Madrid 28013" }

console.log(findInAgenda(agenda, '111'))
// null
// Explicación: No hay resultados

console.log(findInAgenda(agenda, '1'))
// null
// Explicación: Demasiados resultados