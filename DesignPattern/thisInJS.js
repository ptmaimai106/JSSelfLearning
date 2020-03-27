
// // ==========================================================
// const a = {
//     att1 : 'mai neee',
//     foo : function (){
//         console.log("My name is : ", this.att1);
//     }
// }

// const b = {
//     foo1 : a.foo
// }
// const c = a.foo();
// b.foo1()


// // ==========================================================
// const a ={
//     att1 : 'mai neee',
//     foo : function() {
//         console.log("My name is : ", this.att1);
//     }
// }
// const b = {
//     foo1 : a.foo.bind(a)
// }
// b.foo1()

// ==========================================================
// const a ={
//     att1 : 'mai neee',
//     foo : function() {
//         console.log("My name is : ", this.att1);
//     }
// }
// const b = {
//     foo1 : a.foo.apply(a)
// }
// b.foo1

// ==========================================================
// const a ={
//     att1 : 'mai neee',
//     foo : function() {
//         console.log("My name is : ", this.att1);
//     }
// }
// const b = {
//     foo1 : a.foo.call(a)
// }
// b.foo1


// ==========================================================

// const a ={
//     att1 : 'mai neee',
//     foo : () => {
//         console.log("My name is : ", this.att1);
//     }
// }
// a.foo()

// const b ={
//     att1 : 'mai neee',
//     foo : () => {
//         console.log("My name is : ", b.att1);
//     }
// }
// b.foo()


// // ==========================================================
// // CLOSURE

// const a = {
//     users : [
//     {
//         name : 'Mai neee',
//         age : 21,
//     },
//     {
//         name : 'Mai Phan',
//         age : 21,
//     },
//     ],
//     location : 'HCM',
//     show : function(){
//         this.users.forEach(function(item){
//             console.log(`Student at ${this.location} : ${item.name}, ${item.age}`)
//         })
//     }
// }
// a.show()


// ==========================================================
// CLOSURE

const a = {
    users : [{
        name : 'Mai neee',
        age : 21,
    },
    {
        name : 'Mai Phan',
        age : 21,
    },
],
    location : 'HCM',
    // show : () => {
    //     console.log(this)
    //     this.users.forEach((item) => {
    //         console.log(`Student at ${this.location} : ${item.name}, ${item.age}`)
    //     })
    // },
    show : function(){
        this.users.forEach((item) => {
            console.log(`Student at ${this.location} : ${item.name}, ${item.age}`)
        })
    },
}

a.show()