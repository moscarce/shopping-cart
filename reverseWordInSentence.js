const reverseWords = sentence =>{
    sentence = sentence.split(' ');
    result = [];
    for (const word of sentence) {
        result.push(word.split('').reverse().join(''))
    }
    return result.reduce((x,y)=> x + ' ' + y)
}


console.log(reverseWords('A better place'));
