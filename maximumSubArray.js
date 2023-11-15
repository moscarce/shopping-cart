const maximumSubArray= (arr, subRange) =>{
    let maxIndex = [];
    let maxSum = 0;
    for (let index = 0; index < (arr.length - subRange + 1); index++) {
        let subArray = arr.slice(index, (index + subRange));
        let sum = subArray.reduce((a,b) => a+b);
        if (sum > maxSum){
            maxSum = sum;
            for (let index = 0; index < subRange; index++) {
                maxIndex[index] = arr.indexOf(subArray[index]);                
            }
        }
    }
    return maxIndex;
}


console.log(maximumSubArray([2,4,6,3,9,1], 3));

