function sort(array){
    let insideArray = array;
    for(let i= 0; i< insideArray.length; i++){
        for(let j = 0 ; j< insideArray.length - 1; j++){
            if(insideArray[j] > insideArray[j+1]){
                const temp = insideArray[j];
                insideArray[j]= insideArray[j+1];
                insideArray[j+1]=temp;
            }
        }
    }

    return insideArray;
}

const array1 = [14,33,27,35,10]
console.log(array1);

const array2 = sort(array1);
console.log(array2);
