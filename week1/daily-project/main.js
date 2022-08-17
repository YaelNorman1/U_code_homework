console.log("Hello, world!")




// let boughtTesla = true
// const yearOfTeslaPurchase = 2014
// let isUSCitizen = true
// let currentYear = 2018

// let result

// if (boughtTesla && isUSCitizen)
//     result =currentYear- yearOfTeslaPurchase;

// console.log(result);
// if (result>=4)
//     console.log("would like an upgrade?");
// else
//     console.log("are you satisfied with the car?");

// if (!isUSCitizen)
//     console.log("would like to move to the US?");

// if (!boughtTesla)
//     console.log("are interested in buying one?");


// let p1= {
//     name: "Yael",
//     age: 20,
//     city: "Tel aviv"
// }

// let p2= {
//     name: "itai",
//     age: 30,
//     city: "Tel aviv"
// }

// console.log (p1.age==p2.age);

// console.log (p1.city==p2.city);


// let library={ 
//     books: [
//         {
//             title : "bla",
//             author : "bla bla"
//         }
//     ]
// }

// console.log(library);


const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []
//can do it match better with while loop that stops when the shortest array is finished

// let i=0;

// while ( i<3 ) {
//     people.push({name: names[i] , age: ages[i]});
//     i++;
// }

// console.log(people);

// const isEven= function(num){
//     return num%2==0;
// }

// const checkEven= function(arr){
//     for (let num of arr){
//         console.log(isEven(num));
//     }
// }


// checkEven([2,3,4,5]);

let calculator= {
    add: function(x,y){ return x+y},
    subtract: function(x,y) {return x-y}
}

const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2)) //should print 42