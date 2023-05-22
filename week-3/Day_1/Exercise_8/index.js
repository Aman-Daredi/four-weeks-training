let f = function () {
    console.log("Aman this side.");
}



// function simulate(cb) {
//     setTimeout(() => {
//         cb();
//     }, 10000);
// }
// simulate(f);




// Using Promises
function simulate() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 5000);
    });
}
// simulate().then(() => f());




// Using async/await
async function abc(cb) {
    await simulate();
    cb();
}
abc(f);