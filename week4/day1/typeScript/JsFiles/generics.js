"use strict";
function calcSum(arr) {
    return arr.reduce((a, b) => a + b);
}
function convertToNum(arr) {
    const newArr = [];
    arr.forEach(value => {
        const tempNum = +value;
        if (typeof tempNum === "number" &&  !isNaN(tempNum))
            newArr.push(tempNum);
    });
    return newArr;
}
function sum2(arr) {
    if (typeof arr === "number")
        return arr;
    if (typeof arr === "string") {
        const num = +arr;
        if (typeof num === "number")
            return !isNaN(num) ? num : 0;
    }
    if (Array.isArray(arr)) {
        if (arr.every(value => typeof value === 'number')) {
            return calcSum(arr);
        }
        else{ 
            const newArr = convertToNum(arr);
            return calcSum(newArr);
        }
    }
    return 0;
}
console.log(sum2("23"));
console.log(sum2("Tomer"));
console.log(sum2(44));
console.log(sum2(["test", 22, 55, "block", "9"]));
console.log(sum2([23, 433, 11]));


