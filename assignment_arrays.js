// Arrays
// Arrays are used to store multiple values in a single variable.

// Example
let someFruits =  ["Banana", "Apple", "Grape"];
let myGrades =  [10.0, 9.5, 8.9, 10];

/* --------------------------------------------------------------- */
// Creating an array
// Literal atribuition / more used:
//let arrayName = ["item1", "item2", "itemN"];

// let arrayName = new Array(
//     "item1",
//     "item2",
//     "itemN"
// );

/* --------------------------------------------------------------- */
// Access elements of an array
// You can access each value referring to the index number

// Accessing the second element of fruits arrays
console.log(someFruits[1]);

/* --------------------------------------------------------------- */
// Changing an element of the array
someFruits[1] = "Pineapple";
console.log(someFruits[1]);

// Adding new elements
someFruits.push("Strawberry");
someFruits.push("Pear");

// Arrays can store different types
// First name, Last name, StudentID, Age, Grade
// let student = ["Ariel", "Cardoso", 2512, 18, 9.7];

// Arrays also can be used as object with attributes
let student = {
    FirstName: "Ariel",
    LastName: "Cardoso",
    Age: 18,
    Id: 2512
};
console.log(student[0]);
console.log(student["FirstName"]);

/* --------------------------------------------------------------- */
// Foreach function
someFruits.forEach(myFunction);

