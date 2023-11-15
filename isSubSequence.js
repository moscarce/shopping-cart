const isSubsequence = (value1, value2) =>{
    value1 = value1.split('');
    value2 = value2.split('');
    let list = [];
    for(let char of value1){
        if(value2.includes(char)) list.push(value2.indexOf(char));
        else return false;
    }
    return JSON.stringify(list) === JSON.stringify(list.slice().sort());
}
    // let sortList = list.slice()
    // sortList.sort()
    // let isSame = true;
    // if(isAvailable){
    //     for (let index = 0; index < list.length; index++) {
    //         if (list[index] !== sortList[index]){
    //             isSame = false;
    //             break;
    //         }
            
    //     }
    //     return isSame;
    // }else return false;
    // }

console.log(isSubsequence('ace','abcde'));
console.log(isSubsequence('met','stream'));
console.log(isSubsequence('stem','stream'));