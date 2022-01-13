// let x = 2;
// while(x < 6) {
//     console.log(x);
//     x++;
// }

// let y = 7;
// do {
//     console.log(y);
// } while(y > 8);

// console.log(3 / 10)

// let a = 9;

// function changeNumber(x) {
//     x = 10;
//     console.log(`in the function ${x}`)
// }

// changeNumber(a);

// console.log(`the bottom ${a}`);

let b = [1, 2, 3, 4];
let newB = changeIndexTwo(b);

function changeIndexTwo(x) {
    const newArray = [...x];
    newArray[2] = 9;
    return newArray;
}

changeIndexTwo(b);

console.log(b);
console.log(newB);
