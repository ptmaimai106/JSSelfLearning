function sort(array){
    let insideArray = array;
    
    for(let i =0; i< insideArray.length - 1 ; i++){
        let min = i;
        for (let j =i + 1; j< insideArray.length; j++){
            if(insideArray[min]>insideArray[j])
                min = j;
        }
        if(i!= min){
            let temp = insideArray[i];
            insideArray[i]=insideArray[min];
            insideArray[min]=temp;
        }
    }
    return insideArray;
}

const array1 = [14,33,27,35,10]
console.log(array1);

const array2 = sort(array1);
console.log(array2);

