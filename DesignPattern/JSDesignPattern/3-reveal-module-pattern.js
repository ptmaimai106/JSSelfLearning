//=========================== REVEALING MODULE PATTERN=====================================================

//=====================================================================================================
//=====================================================================================================
var myModule = (() =>{
    let publicVar = "public var ne";
    let privateVar = "private var ne";
    function privateFunction() {
        console.log( "Inside private func:" + privateVar );
    }

    function publicSetName( strName ) {
        privateVar = strName;
    }

    function publicGetName() {
         privateFunction();
    }

   
    return {
        setName: publicSetName,
        greeting: publicVar,
        getName: publicGetName
    };

})();

myModule.setName( "Paul Kinlan" );
console.log(myModule.greeting)
myModule.getName();