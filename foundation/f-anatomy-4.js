// Anonymous function
// IIFE - Immediately Invoked Function Expression

//that's recommended when we need to make sure that determined values will be inside of a restrict scope
(function (a, b, c){
    let x = 3
    console.log(`Result: ${a + b + c}`)
    console.log(x)
})(1, 2, 3); // ; is necessary to run the code when having 2 anonymous functions

////// 

(function (){
    let x = 300
    console.log(x)
})();

//////

(() => {
    console.log ('arrow 1')
})();

//////

(() => console.log ('arrow 2'))()
