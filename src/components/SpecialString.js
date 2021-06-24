function substrCount(n, s) {
    // Reemplazando ' ' por ''
    s = s.replace(/\s/g, '')
    // Tranformar a lowercase
    const lowered = s.toLowerCase()
    // Separar subStr
    const splitted = lowered.split('')
    // Obtener combinaciones
    const comb = combinations(splitted)
    // Unir las combinaciones en strings separados
    const strings = []
    comb.forEach(element => {
        strings.push(element.join(''))
    });
    // Obtener Special Strings
    console.log(strings)
    const spStr = specialStrings(strings)
    console.log(spStr)
    console.log(spStr.length)
    return spStr.length
}

const specialStrings = (strs) => {
    // Criterios para obtener un spStr
    let specialStr = []
    strs.forEach(s => {
        // 1. Letra única
        if (s.length == 1) {
            specialStr.push(s)
        }
        // 2. Hasta 3 letras, que la letra del medio sea y que sea palíndromo
        if (s.length == 3 && isPalindrome(s)) {
            specialStr.push(s)
        }
    });
    return specialStr
}

const isPalindrome = (str) => {
    const splitted = str.split('')
    const reversed = splitted.reverse()
    const joined = reversed.join('')
    return str == joined
}

// Potencia de un conjunto
const combinations = (arr) => {
    let comb = arr
    let fragment = []
    for (let i = 0; i < arr.length; i++) {
        // en i tomo 3 y luego avanza 1, el proceso se repite hasta
        // que no se puedan tomar 3 números
        if ((i + 3) <= (arr.length - 1)) {
            // fragment.push(arr.slice(i, i + 3))
            // let joined = []
            // joined.push(fragment[i].join(''))
            // // console.log(fragment[i].join(''))
            // console.log(joined)

            fragment.push(arr.slice(i, i + 3).join(''))
            console.log(fragment)

            if ((i + 3) >= (arr.length - 1)) {
                // Uno los arreglos y los inserto en el comb
                // comb.push(joined)
                comb.push(fragment)
                break
            }
        }
    }
    // comb.push(fragment)
    console.log(comb)

    // console.log(comb)
    // return comb


    // arr.forEach(element => {
    //     console.log()
    //     // console.log(arr.slice(arr.indexOf(element), 3))
    // });
    // return arr.reduce((acc, el) => {
    //     console.log(acc[el])
    //     // console.log(acc.slice(acc[el], 3))
    // })
    // return arr.reduce((acc, el) => acc.concat(acc.map(s => [el].concat(s))), [[]])
}

substrCount(5, 'asasd')