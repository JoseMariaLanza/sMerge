function fizzBuzz(n) {

    for (let i = 1; i <= n; i++) {
        const word = fizz(i) + buzz(i)
        word ? console.log(word) : console.log(i)
    }

}

const fizz = (number) => {
    if (number%3 == 0) {
        return 'Fizz'
    }
    return ''
}

const buzz = (number) => {
    if (number%5 == 0) {
        return 'Buzz'
    }
    return ''
}

fizzBuzz(15)