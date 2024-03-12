


// Syntax:
// string_variable.startsWith(‘value’, ‘index’)



var str = "Hello Cybrosys";
var start_expr = str.startsWith("He");
console.log(start_expr); //In this case, the console gives true as the string starts with the given argument.


var str = "Hello Cybrosys";
var start_expr = str.startsWith("Cy", 6);
console.log(start_expr); // Here, we pass an index along with the value, and since the start index of the value is correct, the console gives true.