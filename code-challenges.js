// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Pseudo code:

// // Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"

// // Set two:
// const fruit3 = "cherry"
// const fruit4 = "kiwi"


// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// Pseudo code:
// function: if/else function
// input: temp1, temp2, temp3
// output: "temp1 is below boiling point", "temp2 is above boiling point", "temp3 is at boiling point"

const temp1 = 42
const temp2 = 350
const temp3 = 212
 
const water = (temp) => {
    if (temp > 212) {
        return `${temp} is above boiling`
    }   else if (temp < 212) {
        return `${temp} is below boiling`
    }   else if (temp === 212) {
        return `${temp} is at boiling`
    }
}   
console.log(water(temp1))
console.log(water(temp2))
console.log(water(temp3))

// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

// Pseudo code:
// // function: .concat to combine the arrays and .length to return the length
// input: myNumbers1, myNumbers2
// output: 10
// combine the arrays with .concat and use .length

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

var conjoined = myNumbers1.concat(myNumbers2);
console.log(conjoined.length)

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 ohcE"

// Pseudo code:
// function: solve with a function using assessors, mutators and variables
// input: .split separates, .reverse reverses the array, .join joins letters again
// output: 2202 ohcE

const currentCohort = "Echo 2022"
 function backward(currentCohort) {
var split = currentCohort.split("")
var reverse = split.reverse()
var join = reverse.join("")
return console.log(join)
}
backward(currentCohort)


// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

// function: modulo
// input: Array provided
// output: "odd" "even" "odd" "even" "odd" "even"


const myArray = [13, 34, 5, 10, 27, 42]

// const oddEven = (myArray) => {
//     if(myArray % 2 === 0) {
//         return "Even"
//     } else {return "Odd"}
// }   
    // console.log(oddEven(myArray))

    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] % 2 === 0) {
          console.log("even");
        } else {
          console.log("odd")
         }
      }

// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Pseudo code:
// function: takes two numbers and subtracts the smaller from larger
// input: 3 - 42
// output: -39

// // Set one:
// const number1 = 58
// const number2 = 100

// input: 58 - 100
// output: -42

      const minus = (number1, number2) => {
        return number1 - number2;
      }
        console.log(minus(58, 100))
// // Set two:
// const number3 = 27
// const number4 = 24

// input: 24 - 27
// output: -3
       
    const minus1 = (number3, number4) => {
        return number4 - number3
    }
        console.log(minus1(27, 24))
