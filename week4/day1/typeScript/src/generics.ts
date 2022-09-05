function calcSum (arr: number[]) : number {
    return arr.reduce((a, b) => a + b);
}

function convertToNum(arr: string []) :number[] {
    const newArr: number[] = [];
    arr.forEach(value => {
        const tempNum :number = +value;
        if (typeof tempNum === "number")
            newArr.push(tempNum);
    })
    return newArr;
}


type TypeArr= string | string[] | number | number[];

function sum2 <TypeArr>(arr: TypeArr) :number {
    
    if (typeof arr === "number")
        return arr;
    if (typeof arr === "string"){
        const num : number= +arr;
        if (typeof num === "number")
            return num;
    }
    if (Array.isArray(arr)){
        if (arr.every(value => typeof value === 'number')){
            return calcSum(arr);
        }
        else if (arr.every(value => typeof value === 'string')){
            const newArr : number[]= convertToNum(arr);
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

//ex2
type Ex2= string | number | boolean

class Generics {
    arr : Ex2[];

    constructor(){
        this.arr= [];
    }
    addNumber(value : Ex2):void{
        this.arr.push(value);

    }
}
