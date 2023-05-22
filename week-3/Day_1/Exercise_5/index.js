function countOccurences(days) {
    let count = {};
    days.forEach(day => {
        day = day[0].toUpperCase() + day.slice(1);
        if(day in count) count[day] = 1+count[day];
        else count[day] = 1;
    })
    return count;
}

let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Monday", "monday"];


let result = countOccurences(days);
console.log(result);