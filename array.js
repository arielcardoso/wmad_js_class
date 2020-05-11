// Arrays

let someNumbers = [5,3,6,8,11,23,45,7];
console.log(someNumbers.sort(
    function(a,b) {
        return a-b;
    }
));

let emptyArray = new Array();
for (let num = 0; num <= 10; num++) {
    emptyArray.push(num);
}
console.log(emptyArray);

