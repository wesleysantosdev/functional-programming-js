const students = [
    {name: 'Michael', score: 6.4},
    {name: 'Pam', score: 8.6},
    {name: 'Holly', score: 9.4},
    {name: 'Jim', score: 9.1}
]

const greatStudent = student => student.score >= 9

const getScore = element => element.score

const average = (acc, el, i, array) => {
    if (i === array.length - 1){
        return (acc + el) / array.length
    } else {
        return acc + el
    }
}

//using all three combined
console.log(students.filter(greatStudent).map(getScore).reduce(average))