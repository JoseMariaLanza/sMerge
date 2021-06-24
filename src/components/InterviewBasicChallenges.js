// Hacer una función que multiplique dos números, sin usar el operador *
let cont = 0
let resultado = 0
const multiply = (a, b) => {
    const positivo = Math.abs(a) == a
    if(cont < Math.abs(a)) {
        cont++
        resultado = positivo ? resultado + b : resultado - b
        multiply(a, b)
    }
    return resultado
}

console.log(multiply(50, -50))

// Obtener el mayor de los números de un array
const getBiggest = (arr) => arr.reduce((acc, el) => acc > el ? acc : el)
const b = getBiggest([50, -1500, 1000, 0, 1, 54])
console.log(b)

// Iterando el arreglo una vez, escribir una función que elimine los undefinied, los false, los 0 y los null
const clean = (arr) => arr.reduce((acc, el) => {
    if(el) {
        acc.push(el)
    }
    return acc
}, [])

const c = clean([1, undefined, null, 0, 2, 3])
console.log(c)

// Excribir una función que aplane los arreglos en un nivel
const arr = [[1, 2], [[3, 4]], [1, []]]
// [1, 2, [3, 4], 1, []]
const flatten = arr => arr.reduce((acc, el) => acc.concat(el), [])
const d = flatten(arr)
console.log(d)

// Escribir una función que cuente la cantidad de veces que se repite una palabra
const repeated = str => {
    const lowered = str.toLowerCase()
    const splitted = lowered.split(' ')
    const reduced = splitted.reduce((acc, el) => {
        if (acc[el]) {
            acc[el]++
        } else {
            acc[el] = 1
        }
        return acc
    }, {})
    return reduced
    // return Object.entries(reduced).reduce((acc, el) => acc[1] > el[1] ? acc : el)
}

const e = repeated('this is a repeated word test this is a a')
console.log(e)

// Verificar si un string es un palíndromo
const isPalindrome = (str) => {
    str = str.replace(/\s/g, '') // reemplaza los espacios por un string vacío
    const lowered = str.toLowerCase() // pasa todo a minúscula
    // const splitted = lowered.split('') // Quita los espacios de nuevo? NO, convierte a array
    // const reversed = splitted.reverse()
    const loweredArray = Array.from(lowered)
    const reversed = loweredArray.reverse()
    const joined = reversed.join('')
    return lowered == joined
}

const f = isPalindrome('Do geese see God')
console.log(f)