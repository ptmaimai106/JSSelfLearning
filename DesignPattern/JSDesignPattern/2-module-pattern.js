//=========================== MODULE PATTERN=====================================================

//=====================================================================================================
//=====================================================================================================
// 2.1 OBJECT LITERALS NOTATION 

var myModule = {
    muProperty : "some value",
    myconfig : {
        useCatching: true,
        language: "vi"
    },
    saysomething: function(){
        console.log("hello world !!!")
    },
    reportConfig: function(){
        console.log(`At the moment, catching is ${this.myconfig.useCatching? 'enable' : 'disable'}`)
    },
    updateConfig: function(newConfig){
        if(typeof newConfig === 'object'){
            this.myconfig = newConfig;
            console.log("update config successfully !!!")
        }
    }
}
console.log("======================2.1=============================")
myModule.saysomething();
myModule.reportConfig();
myModule.updateConfig({
    useCatching: false,
    language: "en"
})
myModule.reportConfig();


//=====================================================================================================
//=====================================================================================================
// 2.2 THE MODULE PAATERN 

console.log("======================2.2.1=============================")

const myModule1 = (function(){
    let counter = 0; 
    return {
        increase: function(){
            return counter++;
        },
        reset: function(){
            console.log("Before reset : ", counter)
            counter = 0; 
        },
        incrementCounter : () => counter ++ ,
        resetCounter : () => {
            console.log("Before reset : ", counter)
            counter = 0; 
        }
    }
})();

const newCounter = myModule1.increase();
console.log(myModule1.counter) // undefine
console.log(newCounter) // 0
myModule1.reset(); // Before reset :  1 

console.log(myModule1.incrementCounter()) // 0
myModule1.resetCounter(); // Before reset :  1 

console.log("======================2.2.2=============================")

const myModule2 = (() =>{
   let privateVar = 0;
   let privateMethod = (value)=>{
    console.log("para passed inside private method : ", value)
   }

   return {
       publicVar : "public variable",
       publicMethod : (val)=>{
           privateVar ++;
           console.log(privateVar);
           privateMethod(val);
       }
   }
})();

console.log(myModule2.publicVar); // public variable
myModule2.publicMethod("maimai"); 
/*
1
para passed inside private method :  maimai
 */


console.log("======================2.2.3=============================")

const myModule3 = (()=>{
    let basket = [];
    const  doSomethingPrivate = ()=> {

    }
    const  doSomethingElsePrivate = () =>{

    }

    return {
        addItem : (item)=>{
            basket.push(item)
        },
        getSizeOfBasket : () => {
            return basket.length
        },
        doSomething : doSomethingPrivate,
        checkOut : function(){
            let size = this.getSizeOfBasket(), count = 0;
            while(size--){
                count += basket[size].price;
            }
            return count;
        },
        // checkOut : ()=> {
        //     let size = this.getSizeOfBasket(), count = 0;
        //     while(size--){
        //         count += basket[size].price;
        //     }
        //     return count;
        // } // => WRONG WAY : THIS is not of myModule3
    }
})();

myModule3.addItem({
    name: "pen",
    price: 10000
})
myModule3.addItem({
    name: "notebook",
    price: 20000
})
console.log(myModule3.getSizeOfBasket());
console.log(myModule3.checkOut());

