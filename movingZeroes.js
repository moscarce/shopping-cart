const moveZeroes = array =>{
     for (let index = 0; index < array.length;index++) {
        if(array[index] === 0){
            shiftToEnd(index,array)
            index--;
        }
    }


    return array;
}

const shiftToEnd = (idx, array) =>{
    for (let index = idx; index < array.length-1; index++) {
        let temp = array[index]
        array[index] = array[index+1]
        array[index+1] = temp;
    }
} 
console.log('hello');
console.log(moveZeroes([4,3,0,0,0,4,10,12]))

// const moveZeroes = array => {
//     let nonZeroIndex = 0;
//     for (let index = 0; index < array.length; index++) {
//       if (array[index] !== 0) {
//         array[nonZeroIndex] = array[index];
//         if (index !== nonZeroIndex) {
//           array[index] = 0;
//         }
//         nonZeroIndex++;
//       }
//     }
//     return array;
//   };
  
//   console.log('hello');
//   console.log(moveZeroes([4, 3, 0, 0, 0, 4, 10, 0]));


  
// try{
//     throw 'Hello';
// } catch (ex){
//     console.log('In catch');
//     throw "catch fire";
// } finally {
//     console.log('In finally');
//     console.log("mumu ni 69");
// }
  

module.exports = moveZeroes;
















