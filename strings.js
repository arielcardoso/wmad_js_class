// string
let fruit = "banana";
let fruit1 = "banana, orange, mango";
let moreFruit = "banana \n apple";

//character
document.getElementById("elem").innerHTML = moreFruit;
console.log(moreFruit);
console.log(fruit.length);

//find character
console.log(fruit.indexOf("b"));
console.log(fruit.slice(2,6));

//find argument-include
console.log(fruit.replace("banana", "pineapple"));

console.log(fruit.toUpperCase());

console.log(fruit.split(""));
console.log(fruit1.split(", "));