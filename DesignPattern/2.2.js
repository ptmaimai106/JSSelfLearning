// javascript pass variables by reference or by value

// function foo(x){
//     x = 1
// }


// var a = 2
// foo(a)

// console.log(a) 
// ==========================================================

// function foo(a){
//     a.ele1 = "mai"
// }
// var a = {}
// foo(a)
// console.log(a)

// ==========================================================
// var b = {}
// function foo1(b){
//     b = {ele: "mai"}
// }
// foo1(b)
// console.log(b)


 
//"use strict"
// var a = 0101

// console.log( a)
// ==========================================================


// "use strict"
// var a = 0101010101010101
// delete a
// console.log(typeof a, a)

// "use strict"
// var a = {}
// Object.defineProperty(a,"prob",{
//     value: 6,
//     writable: true,
//     configurable: false,
//     enumerable: true})
// a.prob = "123"

// console.log(a)



// "use strict"
// var a = {}
// Object.defineProperty(a,"prob",{
//     value: 6,
//     writable: true,
//     enumerable: false // property will be true
// })
// // a.prob = "123"

// console.log(a)
