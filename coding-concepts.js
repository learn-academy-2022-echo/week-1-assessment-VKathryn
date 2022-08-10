// // ASSESSMENT 1: Coding Conceptual Questions

// // Examine the following examples.

// // First, predict the outcome based on your understanding of the code.
// // Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// // --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
console.log(colors.push("indigo"))

// // a) Your answer: This will add "indigo" to the end of this array
// // b) Verify and explain: The terminal reflects 5, which is the index position "indigo" assumes. <-- I'd love to know why it didn't return the array!


// // --------------------1) What will this log?

const cohort = "LEARN 2022"
console.log(cohort.length)

// // a) Your answer: this will return the number of digits contained between the quotation marks
// // b) Verify and explain: My answer is correct, it returns the number of spaces taken up by the letters and numbers and the space between them.


// // --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// // a) Your answer: I think this will return Hello World! four times?? 
// // b) Verify and explain: Ahhh. This returned the value in the fourth index, which is "o". I thought this initially because something about the [] made me think it was referring to the index, but I talked myself out of that as the answer -_-


// // --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// // a) Your answer: This will return "Ruby" because it is asking for the entry in index 1
// // b) Verify and explain: This is correct, it returns Ruby

// // --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
//console.log(weekendDays.toUpperCase())
    console.log(weekendDays.toString().toUpperCase());

// // a) Your answer: This will transform the words in quotations to uppercase letters.
// // b) Verify and explain: I was correct, but it took me a WHILE to figure out that it needed to be converted from an array to a string before the command would work. This one was hard won!

// // --------------------5) What will this log?

// const dataTypes = ["number", "string", "Boolean"]
// console.log(typeof dataTypes.length)

const dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// // a) Your answer: number of digits for each datatype
// // b) Verify and explain: I'm confused! I thought it would return 6, 6, 7, but instead it returned number.  After some research, I can see that typeOf is unsurprisingly used to return the type of data in the array. This is what it did, but why only for the first value? Is it because you would need to write a loop in order for it to return the types of all of the values? 

//And what is the point of .length in this instance? I would love some clarification here!

// console.log(typeof dataTypes)
// console.log(dataTypes.toString().length())