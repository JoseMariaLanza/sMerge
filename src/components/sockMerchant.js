function sockMerchant(n, ar) {
    // Write your code here

    // 1º forma: Creando un objeto
    // // obtengo un objeto con key y un valor que representa la cantidad
    // // de repeticiones de cada elemento
    // const reduced = ar.reduce((acc, el) => {
    //     if (acc[el]) {
    //         acc[el]++
    //     } else {
    //         acc[el] = 1
    //     }
    //     return acc
    // }, {})

    // 2º forma: creando un array
    let result = []
    for (let i = 0; i < n; i++) {
        result[i] = 0
        for (let j = 0; j < n; j++) {
            if (ar[j] == ar[i]) {
                result[i]++
            }
        }
    }
    const reduced = result.filter((item, index) => {
        return result.indexOf(item) === index
    })
    console.log('2º FORMA:')
    console.log(reduced)

    // 2º Forma
    let array = []
    reduced.map(el => {
        if (el != 1) {
            array.push(el)
        }
    })

    // 1º Forma
    // // crea un array con los elementos con los cuales seguro se puede
    // // armar por lo menos 1 par
    // let array = []
    // Object.values(reduced).map(el => {
    //     if (el != 1) {
    //         array.push(el)
    //     }
    // })

    // Suma los pares
    let pairs = 0
    array.forEach(element => {
        pairs += parseInt(element / 2)
    });

    return pairs
}

sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])
// console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]))