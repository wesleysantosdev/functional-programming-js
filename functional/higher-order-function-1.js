/*
    Functions that operates on other functions, either by taking them as arguments or by returning them. Those are called higher-order functions.
*/

function run (fn){
    return fn()
}

function sayHello (){
    console.log('Hello!')
}

run(sayHello)

run(function(){
    console.log('Hello World!')
})

const result = run(Math.random)
console.log(result)