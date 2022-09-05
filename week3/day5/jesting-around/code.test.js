const Exercises = require ('./code')


test("Exercises.isEven should return if a num is even", () => {
    let ex= new Exercises();
    expect(ex.isEven(4)).toBeTruthy()
    expect(ex.isEven(5)).toBeFalsy()
    expect(ex.isEven()).toBeFalsy()

})

test("removeAtLeastOne should remove at least one element from the array", () => {
    let ex= new Exercises();

    let arr= [2,3,4,5,6,7,8,9,4]
    let arrLength= arr.length

    expect(ex.removeAtLeastOne(arr).length).toBeLessThan(arrLength)
    expect(ex.removeAtLeastOne([]).length).toBe(0)
})

test(`should return a clean string without these symbols: "!", "#", ".", ",", "'"`, () => {
    let ex= new Exercises();

    let str= 'hel!#l,o...'
    expect(ex.simplify(str)).toBe('hello')
    //expect(ex.simplify('he!#.gtuit,')).not.stringMatching("!#.,'")
    expect(ex.simplify('')).toBe('')

})

test("should verify that there is at least one boolean in the array, or return true of more true values in the array", () => {
    let ex= new Exercises();

    let result= ex.validate([false,true])
    expect(result).toBeFalsy()      
    expect(ex.validate([false,true,true])).toBeTruthy()
    expect(ex.validate([1,2])).toMatchObject({error: 'Need at least one boolean'})

})


