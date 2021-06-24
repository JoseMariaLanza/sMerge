function substrCount(n, s) {
    // Reemplazando ' ' por ''
    s = s.replace(/\s/g, '')
    // Tranformar a lowercase
    const lowered = s.toLowerCase()
    // Separar subStr
    const splitted = lowered.split('')
    // Obtener combinaciones
    const comb = combinations(splitted)
    // Obtener Strings especiales
    const spStr = specialStrings(comb)
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
        // if (s.length == 3 && isPalindrome(s)) {
        if (s.length == 3 && isPalindrome(s) || s.length == 2 && isPalindrome(s)) {
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

const combinations = (arr) => {
    let comb = arr
    let fragment = []
    for (let i = 0; i < arr.length; i++) {
        // en i tomo 3 y luego avanza 1, el proceso se repite hasta
        // que no se puedan tomar 3 números
        if ((i + 2) <= (arr.length - 1)) {
            fragment.push(arr.slice(i, i + 3).join(''))

        } else if((i + 1 <= (arr.length - 1))) {
            if (arr[i] == arr[i+1]) {
                fragment.push(arr.slice(i, i + 2).join(''))
            }
        }

        if ((i + 1) >= (arr.length - 1)) {
            comb.push(fragment)
            break
        }
    }
    const combinationsFlatted = flat(comb)
    console.log(combinationsFlatted)
    return combinationsFlatted
}

const flat = (arr) => arr.reduce((acc, el) => acc.concat(el), [])

substrCount(5, 'mnonopoo')