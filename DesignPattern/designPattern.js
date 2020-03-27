// constructor : 

// function animal(name, leg){
//     this.name = name
//     this.leg = leg
//     this.about = function(){
//         return this.name + " has " + this.leg + ' legs ';
//     }
// };


// const dog = new  animal("dog", 4);
// console.log(dog)
// console.log(dog.about());

// ================================================================================
// // constructor with prototype :
// function animal(name, leg){
//     this.name = name
//     this.leg = leg
// };
// animal.prototype.about = function(){
//     return this.name + " has " + this.leg + ' legs ';
// }

// const dog = new  animal("dog", 4);
// console.log(dog.about.prototype)
// console.log(dog.about());

// ================================================================================

// constructor with class :
// class animal {
//     constructor(name, leg){
//         this.name = name;
//         this.leg = leg;

//     }
//     about(){
//         return   this.name + " has " + this.leg + ' legs ';
//     }
// }

// const dog = new  animal("dog", 4);
// console.log(dog.about());

// ================================================================================
// MODULE PATTERN : 

// var countModule = (() => {
//     let count = 0;
//     const log = (name) =>{
//         console.log(name, count);
//     }

//     return { 
//         increase: () =>{
//             count ++;
//             log("increase");
//         },
//         decrease: () =>{
//             count --;
//             log("decrease");
//         },
//         reset: ()=>{
//             count = 0;
//             log("reset");
//         }
//     }
// })(); // Immediately involke function expression - IIFE



// Revealing Module Pattern
var countModule = (() => {
    let count = 0;
    const log = (name) =>{
        console.log(name, count);
    }

    const increase = ()=>{
        count ++;
        log("increase");
    }

    
    const decrease = () =>{
        count --;
        log("decrease");
    }

    const reset = () =>{
        count = 0;
        log("reset");
    }

    return { 
       increase : increase,
       decrease : decrease,
       reset : reset
      
    }
})(); // Immediately involke function expression - IIFE




countModule.increase(); // increase 1
countModule.increase(); // increase 2
countModule.decrease(); // increase 1
countModule.reset();    // reset 0


