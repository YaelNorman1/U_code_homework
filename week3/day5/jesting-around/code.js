class Exercises {
    //should return true if n is even, false otherwise
    isEven(n) {
        return n % 2 == 0 ? true : false
    }
    //should remove at least one element from the array `arr`
    removeAtLeastOne(arr) {
        let numItemsToRemove = Math.floor(Math.random() * (arr.length - 1)) + 1
        arr.splice(0, numItemsToRemove)
        return arr
    }
    //should return a clean string without these symbols: "!", "#", ".", ",", "'"
    simplify(str) {
        let symbols = ["!", "#", ".", ",", "'"]
        return str.split("").filter(c => symbols.indexOf(c) == -1).join("")
    }
    validate (arr){
        let countTrue=0
        const boolType= arr.filter(item => typeof item === 'boolean')
        if (boolType.length === 0)
            return {error: "Need at least one boolean"}
        for (let item of arr){
            if ( item === true)
                countTrue++;
        }
        return (arr.length/2 < countTrue)? true : false
    }
}

const ex= new Exercises ()
console.log(ex.validate([false,true]))
console.log(ex.isEven())


// const add = function(a, b){
//     return a + b
// }


// module.exports = add
module.exports = Exercises

