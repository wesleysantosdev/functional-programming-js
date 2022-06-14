const numbers = [1, 2, 3, 4, 5, 6]

const total = numbers.reduce((accumulator, element) => accumulator + element)

console.log(total)

const average = (acc, el, i, array) => {
    if (i === array.length - 1){
        return (acc + el) / array.length
    } else {
        return acc + el
    }
}

const result = numbers.reduce(average)

console.log(result)