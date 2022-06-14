const numbers = [1, 2, 3, 4, 5, 6]

const greaterThanZero = element => element > 0
const greaterThanTen = element => element > 10
const even = element => element % 2 === 0

console.log(numbers.filter(element => element > 0))
console.log(numbers.filter(greaterThanZero))
console.log(numbers.filter(greaterThanTen))
console.log(numbers.filter(even))

//////

const students = [
    {name: 'Michael', score: 6.4},
    {name: 'Pam', score: 8.6},
    {name: 'Holly', score: 9.4},
    {name: 'Jim', score: 9.1}
]

const greatStudent = students.filter(student => student.score >= 9)

console.log(greatStudent)