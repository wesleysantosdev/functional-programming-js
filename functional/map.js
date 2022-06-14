const numbers = [1, 2, 3, 4, 5, 6]

const numbers2 = numbers.map(element => element * 2)

console.log(numbers2)

//////

const students = [
    {name: 'Michael', score: 6.4},
    {name: 'Pam', score: 8.6},
    {name: 'Holly', score: 9.4},
    {name: 'Jim', score: 9.1}
]

const getScore = students.map(element => element.score).map(Math.floor) //Math.ceil will round the float number up, and Math.floor will round it down

console.log(getScore)

