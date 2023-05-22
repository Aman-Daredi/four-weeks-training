function intersection(arr1, arr2) {
    let result = [];
    for(a of arr1) {
        if(arr2.includes(a)) result.push(a);
    }
    return result;
}


let arr1 = [1,2,3,4,5,6];
let arr2 = [5,6,8,9,10];
//result should be [5,6];

console.log(intersection(arr1, arr2));