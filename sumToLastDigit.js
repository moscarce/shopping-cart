const sumToLastDigit = input =>{
    input = String(input);
    let sum = 0;
    for (let index = 0; index < input.length; index++) {
        if (input[index] === '-') { 
            index++;
            sum -= Number(input[index]);
        }
        else sum += Number(input[index]);
    }
    sum = String(sum);
    if (sum.length === 1) return sum;
    else if(sum.length === 2 && sum[0] === '-') return sum;
    else return sumToLastDigit(sum);
}

console.log(sumToLastDigit(-10));
console.log(sumToLastDigit('38'));

