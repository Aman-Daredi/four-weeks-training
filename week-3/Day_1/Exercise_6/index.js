function unqiueElements(arr) {
    let unique = [];
    for(a of arr) {
        if(unique.includes(a)) continue;
        else unique.push(a);
    }
    return unique;
}

let nums = [1,1,2,5,4,5, 6, 6, 10, 10, 10];
console.log(unqiueElements(nums));