const backSpace = (value1='', value2='') =>{
    let list1 = value1.split('');
    let list2 = value2.split('');
    list1 = removeHash(list1).join('');
    list2 = removeHash(list2).join('');
    return list1 === list2;
}


const removeHash =( value=[] )=>{
    let list = value;
    let backSpace = '#';
    while(list.includes(backSpace)){
        let backSpaceIndex = list.indexOf(backSpace);
        if (backSpaceIndex > 0)list.splice((backSpaceIndex-1),2);
        else list.splice(backSpace,1);
    }
    return list;
}


console.log(backSpace('ab#d','ac#d'));
console.log(backSpace('chr######chr','chr'));
console.log(backSpace('aq#','r'));

