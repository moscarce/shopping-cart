// const romanToNumber = romanFigure =>{
//     let roman = { I:1, V:5, X:10, L:50, C:100, D:500, M:1000}
//     romanFigure = romanFigure.split('')
//     sum = 0;
//     for(let index = 0;index < romanFigure.length;index++){
//         sum += roman[romanFigure[index]]
//         if (index < romanFigure.length - 1){
//         if ((romanFigure[index] === 'I' && romanFigure[index+1] === 'V') || (romanFigure[index] === 'I' && romanFigure[index+1] === 'X')) sum-= 2;
//         if ((romanFigure[index] === 'X' && romanFigure[index+1] === 'L') || (romanFigure[index] === 'X' && romanFigure[index+1] === 'C')) sum-= 20;
//         if ((romanFigure[index] === 'C' && romanFigure[index+1] === 'D') || (romanFigure[index] === 'C' && romanFigure[index+1] === 'M')) sum-= 200;
//     }
//     }
//     return sum;
// }

// console.log(romanToNumber('IX'));
// console.log(romanToNumber('IV'));
// console.log(romanToNumber('XL'));
// console.log(romanToNumber('MCMXCIV'));
// let count = 0;
// const checkStack = (n) =>{
//     count++;
//     console.log('count: ',count);
//     if(n === 0) return 1;
//     else return n * checkStack(n-1);
// }

// console.log(checkStack(9553));



let arr = new Array(1,2,3);
Array.prototype.push = function (){
    let sum=0;
    for (const num of this) {
        sum+=num;
    }
    return sum;
}

