function run(){
    console.log("running !");
}


function withCount(fn){
    let count = 0; 
    return function(){
        console.log(`executed ${++count} times`);
        return fn();
    }
} //wrap function 

const runWithCount = withCount(run);
runWithCount();
runWithCount();
runWithCount();
runWithCount();