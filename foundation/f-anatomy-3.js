//Function expression
const increment1 = function (n){
    return n + 1
}


// Arrow function

 const increment2 = (n) => {
     return n + 1
}


//when the function has only one parameter, we can simplify it this way
const increment3 =  n => {
    return n + 1
}

//and even this way
const increment4 =  n => n + 1


console.log(increment1(2))
console.log(increment2(5))
console.log(increment3(34))
console.log(increment4(199))

const sum = (a, b) => a + b
console.log(sum(3,7))