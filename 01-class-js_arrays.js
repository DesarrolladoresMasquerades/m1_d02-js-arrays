// Class code examples

// Arrays are an ordered list of things

const myArray = ["cappuccino", 48, null, ["marco", "carlos", "carol"] ]

console.log( myArray[3][1] )

console.log( myArray[3].length )

console.log( myArray[1].toString().length )



const aliasArray = myArray
console.log("aliasArray and myArray", aliasArray === myArray)

console.log("return from push: ", myArray.push("2022/01/18") )// myArray[ myArray.length] = "2022/01/18"

console.log("aliasArray and myArray", aliasArray === myArray)



console.log("return from pop: ", myArray.pop())

// In your vs-code add your name to the list ["marco", "carlos", "carol"]

myArray[3].push("your name here")

console.log(myArray)

const anotherArray = ["monday", "tuesday", "friday"]

const myConcatArray = myArray.concat(anotherArray) // The result of concat is a new array

console.log(myConcatArray)

console.log( myConcatArray === myArray)

const arrrayOne = [ 1, 2, 3 ]
const arrrayTwo = [ 1, 2, 3 ]
console.log( arrrayOne === arrrayTwo )
// console.log( [ 1, 2, 3 ] === [ 1, 2, 3 ] )