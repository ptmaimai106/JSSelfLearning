function sort(array){
    let insideArray = array;
    for(let i = 0; i< array.length; i++){
        let value = array[i];
        let j = i - 1;
        while( j >= 0 ){
            if(array[j] > value){
                insideArray[j+1] = array[j];
            } else break;
            j -= 1;
        }
        insideArray[j+1] = value;
    }

    return insideArray;
}

const array1 = [14,33,27,35,10]
console.log(array1);

const array2 = sort(array1);
console.log(array2);
