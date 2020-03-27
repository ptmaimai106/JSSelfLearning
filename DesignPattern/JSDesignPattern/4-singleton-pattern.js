//=========================== SINGLETON PATTERN=====================================================

//=====================================================================================================
//=====================================================================================================
console.log("======================4.1=============================")

var mySingleton = (function(){

    let instance ;
    function init(){
        function privateMethod(){
            console.log("this is private method");
        }
        let privateVar = "I am private too";
        let privateToo = Math.random();

        return {
            publicMethod : function(){
                console.log("public can see me !!!");
            },
            getRandomNumber: function(){
                return privateToo
            }
        }
    }
    return {
        getInstance: function(){
            if(!instance){
                instance = init();
            }
            return instance;
        }
    }
})();


var notSingleton =  (function(){

    let instance ;
    function init(){
        function privateMethod(){
            console.log("this is private method");
        }
        let privateVar = "I am private too";
        let privateToo = Math.random();

        return {
            publicMethod : function(){
                console.log("public can see me !!!");
            },
            getRandomNumber: function(){
                return privateToo
            }
        }
    }
    return {
        getInstance: function(){
                instance = init();
            return instance;
        }
    }
})();



var singleA = mySingleton.getInstance();
var singleB = mySingleton.getInstance();
console.log( singleA.getRandomNumber() === singleB.getRandomNumber() ); // true
 
var badSingleA = notSingleton.getInstance();
var badSingleB = notSingleton.getInstance();
console.log( badSingleA.getRandomNumber() === badSingleB.getRandomNumber() ); // false

console.log("======================4.2=============================")

var singletonTest = (function(){
    function Singleton(option){
        let options = option || {};
        this.name = "singleton test";
        this.pointX = options.pointX||6
        this.pointY = options.pointY||10
    }

    let instance;
    let _static = {
        name : "singleton test",
        getInstance : function(option){
            if(instance === undefined){
                instance = new Singleton(option);
            }
            return instance;
        }
    }

    return _static;
})();

var singletontest = singletonTest.getInstance({pointX : 5});
console.log(singletontest.pointX)