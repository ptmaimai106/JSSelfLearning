
//=========================== CONSTRUCTOR PATTERN=====================================================

//=====================================================================================================
//=====================================================================================================
// 1.1 - 3 WAY TO CREATE OBJECT 

const newObj = {};
const newObj1 = Object.create(Object.prototype);
const newObj2 = new Object();

console.log("1.1.1 : ",newObj);
console.log("1.1.2 : ",newObj1);
console.log("1.1.3 : ", newObj2);

//=====================================================================================================
//=====================================================================================================

//1.2 -  ASSIGN VALUE TO OBJECT : 

        //set
newObj.newKey = "new value"; 
newObj["newkey1"] = "new value 1";
Object.defineProperty(newObj, "newkey2",{
    value: "new value 2",
    writable: true,
    enumerable: true,
    configurable: true
});
Object.defineProperties(newObj, {
    "newkey3": {
        value: "new value 3",
        writable: true,
        enumerable: true,
        configurable: true
    },
    "newkey4": {
        value: "new value 4",
        writable: true,
        enumerable: true,
        configurable: true
    }
})

console.log("1.2 : ",newObj)



//=====================================================================================================
//=====================================================================================================

// 1.3  BASIC CONSTRUCTOR :

        // define function 
function User(username, year, gender){
    this.username = username;
    this.year = year;
    this.gender = gender;

    this.toString = function (){
        return `${this.username} , ${this.year}, ${this.gender} `;
    }


    // this.toString =  () => {
    //     return `${this.model} has done ${this.miles} miles `;
    // }  // both of them are true way
}

        // call function like a contructor : 
const civic = new Car("Honda", 2010, 20000);
const civic1 = new Car("Honda 1", 2010, 20000);

console.log("1.3.1 : ", civic.toString()) // Honda has done 20000 miles
console.log("1.3.2 : ", civic1.toString()) // Honda 1 has done 20000 miles

//=====================================================================================================
//=====================================================================================================

//  CONSTRUCTOR WITH PROTOTYPE :

        // define function 
function Vehicle(model, year, miles){
    this.model = model;
    this.year = year;
    this.miles = miles;
}

Vehicle.prototype.toString = function(){
    return `${this.model} has done ${this.miles} miles `;
}

// Vehicle.prototype.toString = () => {
//     return `${this.model} has done ${this.miles} miles `;
// }                            => WRONG WAY ( THIS has changed)


        // call function like a contructor : 
const honda = new Vehicle("Honda Blade", 2010, 20000);
const honda1 = new Vehicle("Honda Blade 1", 2010, 20000);

console.log("1.4.1 : ", honda.toString()) // Honda Blade has done 20000 miles
console.log("1.4.2 : ", honda1.toString()) // Honda Blade 1 has done 20000 miles
// => phương thức  toString được tối ưu hóa, nhiều instance của Vehicle được tạo ra nhưng cùng truy cập tới prototype giống nhau




