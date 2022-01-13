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

// let b = [1, 2, 3, 4];
// let newB = changeIndexTwo(b);

// function changeIndexTwo(x) {
//     const newArray = [...x];
//     newArray[2] = 9;
//     return newArray;
// }

// changeIndexTwo(b);

// console.log(b);
// console.log(newB);

// let arrayOne = [1, 2, 3, 4];
// console.log(arrayOne);
// arrayOne.push(10);
// console.log(arrayOne);
// arrayOne.unshift(11);
// console.log(arrayOne);
// let end = arrayOne.pop();
// console.log(arrayOne);
// console.log(end);
// let start = arrayOne.shift();
// console.log(arrayOne);
// console.log(start);
// let middle = arrayOne.splice(2, 0, 12);
// console.log(arrayOne);
// console.log(middle);

const myArr = [1, 2, 3, 4];

function getSomething(arr) {
    const s = [];
    for (let i of arr) {
        if (i !== 3) { 
            console.log(i);
        } else {
            return 'blah';
        }
    }
    console.log('something');

}

console.log(getSomething(myArr))
