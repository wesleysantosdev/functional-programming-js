//Function Declaration

function sayHello (){
    console.log('Hello World!')
}

sayHello()


function sayHelloTo (name){
    console.log(`Hello ${name}`)
}

sayHelloTo('Wesley')


function returnHi (){
    return 'Hi'
}

const greeting = returnHi()

console.log(greeting)
console.log(returnHi())


function returnHiTo (name){
    return `Hi ${name}!`
}

const greetingTo = returnHiTo('Wesley')

console.log(greetingTo)
console.log(returnHiTo('Wesley'))