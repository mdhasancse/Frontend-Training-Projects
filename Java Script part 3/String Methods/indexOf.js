
// If the characters are present in the string_variable, the method returns the index of the first occurrence of the characters, e
//lse it returns -1.

var str = "Hello Cybrosys";
var index_char = str.indexOf('sys');
console.log(index_char);  // The console gives value 11 as the first occurrence of ‘sys’ occurs at the 11th index. 


var str = "Hello Cybrosys";
var index_char = str.indexOf('xyz');
console.log(index_char); //The console gives value -1 as the string does not contain the characters ‘xyz’.