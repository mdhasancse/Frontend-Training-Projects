
// In the slice method, we pass two indices. The first argument is the starting index, and the second argument is the ending index. 
//The method slices the string between these indices and returns it.

// Syntax
// string_variable.slice(‘start index’, ‘end index’);

var str = "Hello Cybrosys";
var slice_expr = str.slice('2', '11');
console.log(slice_expr); // The console gives ‘Cybro’, that is from the 6th position of the string to the 11th position of the string.




//  The slice() method returns an empty string if this is the case.
const text = "Mozilla";
console.log(text.substring(5, 2)); // "zil"
console.log(text.slice(5, 2)); // "" 

console.log(text.slice(-5, 2)); // ""
console.log(text.slice(-5, -2)); // "zil"