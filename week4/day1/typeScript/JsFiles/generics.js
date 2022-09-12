"use strict";
function calcSum(arr) {
    return arr.reduce((a, b) => a + b);
}
function convertToNum(arr) {
    const newArr = [];
    arr.forEach(value => {
        const tempNum = +value;
        if (typeof tempNum === "number")
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
            return num;
    }
    if (Array.isArray(arr)) {
        if (arr.every(value => typeof value === 'number')) {
            return calcSum(arr);
        }
        else if (arr.every(value => typeof value === 'string')) {
            const newArr = convertToNum(arr);
            return calcSum(newArr);
        }
    }
    return -1;
}
console.log(sum2("23"));
console.log(sum2("Tomer"));
console.log(sum2(44));
console.log(sum2(["test", 22, 55, "block", "9"]));
console.log(sum2([23, 433, 11]));
class Generics {
    constructor() {
        this.arr = [];
    }
    addNumber(value) {
        this.arr.push(value);
    }
}
//# sourceMappingURL=generics.js.map